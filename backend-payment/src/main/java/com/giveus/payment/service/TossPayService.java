package com.giveus.payment.service;

import com.giveus.payment.common.repository.TidRepository;
import com.giveus.payment.dto.request.TossPayDonateReq;
import com.giveus.payment.dto.response.TossPayCreateRes;
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

    private final TidRepository tidRepository;

    @Value("${host.address}")
    private String hostAddress;

    @Value("${pay.toss.secret-key}")
    private String secretKey;


    @Transactional
    public TossPayCreateRes requestPayment(TossPayDonateReq donateReq) {

        log.info("sdfdsfa");

        String orderId = "TOSS_F" + donateReq.getFundingNo() + "M" + donateReq.getMemberNo();

        /** 요청 헤더 */
        HttpHeaders headers = getRequestHttpHeaders();

        /** 요청 바디 */
        Map<String, Object> params = new HashMap<>();
        // 상점 주문 번호 : 추후 상점 주문 번호와 결제 정보를 매칭하기 위해 필요합니다.
        params.put("paymentKey", UUID.randomUUID().toString());
        params.put("orderId", orderId);
        // 결제 금액 : 손님으로부터 받을 총 결제금액
        params.put("amount", donateReq.getAmount());

        /** Header와 Body 합쳐서 RestTemplate로 보내기 위한 밑작업 */
        HttpEntity<Map<String, Object>> httpEntity = new HttpEntity<>(params, headers);

        /** RestTemplate로 Response 받아와서 DTO로 변환후 return */
        RestTemplate restTemplate = new RestTemplate();
        Object res = restTemplate.postForObject(
                "https://api.tosspayments.com/v1/payments/confirm",
                httpEntity,
                Object.class);

        log.info("res: {}", res);

        /** Tid Redis에 10분간 저장 */
//        tidRepository.save(orderNo, res.getPayToken(), 10L);

        return null;
    }

    private HttpHeaders getRequestHttpHeaders() {
        String encodedSecretKey = Base64.getEncoder().encodeToString((secretKey + ":").getBytes());

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        httpHeaders.setBasicAuth(encodedSecretKey);
        return httpHeaders;

    }
}
