package com.giveus.payment.service;

import com.giveus.payment.dto.request.TossPayDonateReq;
import com.giveus.payment.dto.response.TossPayConfirmRes;
import com.giveus.payment.dto.response.TossPayReadyRes;
import com.giveus.payment.entity.Member;
import com.giveus.payment.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class TossPayService {

    private final MemberRepository memberRepository;

    @Value("${pay.toss.secret-key}")
    private String secretKey;

    @Value("${pay.toss.donate.success_url}")
    private String donateSuccessUrl;

    @Value("${pay.toss.donate.fail_url}")
    private String donateFailUrl;

    @Transactional
    public TossPayReadyRes requestPayment(TossPayDonateReq donateReq) {

        Member member = memberRepository.findById(donateReq.getMemberNo());
        return TossPayReadyRes.builder()
                .amount(donateReq.getAmount())
                .orderId("F" + donateReq.getFundingNo() + "M" + donateReq.getMemberNo() + "_" + UUID.randomUUID().toString())
                .orderName(donateReq.getTitle())
                .customerEmail(member.getEmail())
                .customerName(member.getName())
                .successUrl(donateSuccessUrl
                        + "?memberNo=" + donateReq.getMemberNo()
                        + "&fundingNo=" + donateReq.getFundingNo()
                        + "&point=" + donateReq.getPoint()
                        + "&opened=" + donateReq.isOpened())
                .failUrl(donateFailUrl)
                .build();
    }

    @Transactional
    public TossPayConfirmRes donateSuccess(String orderId, String paymentKey, int amount) {

        log.info("donateSuccessUrl: {}", donateSuccessUrl);
        HttpHeaders headers = getRequestHttpHeaders();
        Map<String, Object> params = new HashMap<>();
        params.put("orderId", orderId);
        params.put("amount", amount);
        params.put("paymentKey", paymentKey);
        HttpEntity<Map<String, Object>> httpEntity = new HttpEntity<>(params, headers);
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForObject(
                "https://api.tosspayments.com/v1/payments/confirm",
                httpEntity,
                TossPayConfirmRes.class
        );
    }

    private HttpHeaders getRequestHttpHeaders() {
        String encodedSecretKey = Base64.getEncoder().encodeToString((secretKey + ":").getBytes());

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        httpHeaders.setBasicAuth(encodedSecretKey);
        return httpHeaders;
    }
}
