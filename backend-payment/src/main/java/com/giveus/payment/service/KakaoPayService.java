package com.giveus.payment.service;

import com.giveus.payment.common.repository.TidRepository;
import com.giveus.payment.dto.KakaoPayInfoDto;
import com.giveus.payment.dto.request.KakaoPayRequest;
import com.giveus.payment.dto.request.MakeKakaoPayRequest;
import com.giveus.payment.dto.response.KakaoPayApproveResDto;
import com.giveus.payment.dto.response.KakaoPayReadyResDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class KakaoPayService {

    private final MakeKakaoPayRequest makeKakaoPayRequest;
    private final TidRepository tidRepository;

    @Value("${pay.kakao.secret-key}")
    private String secretKey;

    /** 카오페이 결제를 시작하기 위해 상세 정보를 카카오페이 서버에 전달하고 결제 고유 번호(TID)를 받는 단계입니다.
     * 어드민 키를 헤더에 담아 파라미터 값들과 함께 POST로 요청합니다.
     * 테스트  가맹점 코드로 'TC0ONETIME'를 사용 */
    @Transactional
    public KakaoPayReadyResDto getRedirectUrl(KakaoPayInfoDto kakaoPayInfoDto) throws Exception {
        /** 요청 헤더 */
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "SECRET_KEY " + secretKey);
        headers.setContentType(MediaType.APPLICATION_JSON);

        /** 요청 Body */
        KakaoPayRequest kakaoPayRequest = makeKakaoPayRequest.getReadyRequest(kakaoPayInfoDto);

        /** Header와 Body 합쳐서 RestTemplate로 보내기 위한 밑작업 */
        HttpEntity<Map<String, Object>> httpEntity = new HttpEntity<>(kakaoPayRequest.getMap(), headers);

        /** RestTemplate로 Response 받아와서 DTO로 변환후 return */
        RestTemplate restTemplate = new RestTemplate();

        KakaoPayReadyResDto payReadyResDto = restTemplate.postForObject(
                kakaoPayRequest.getUrl(),
                httpEntity,
                KakaoPayReadyResDto.class);

        tidRepository.save( "F" + kakaoPayInfoDto.getFundingNo() + "M" + kakaoPayInfoDto.getMemberNo(), payReadyResDto.getTid(), 5L);

        return payReadyResDto;
    }

    @Transactional
    public KakaoPayApproveResDto getApprove(String pgToken, int memberNo, int fundingNo) throws Exception {

        String orderId = "F" + fundingNo + "M" + memberNo;
        String tid = tidRepository.find(orderId)
                .orElseThrow(() -> new Exception("결제 고유 번호가 존재하지 않습니다."));

        HttpHeaders headers = new HttpHeaders();

        /** 요청 헤더 */
        headers.set("Authorization", "SECRET_KEY " + secretKey);
        headers.setContentType(MediaType.APPLICATION_JSON);

        /** 요청 Body */
        KakaoPayRequest kakaoPayRequest = makeKakaoPayRequest.getApproveRequest(tid, memberNo, fundingNo, pgToken);

        /** Header와 Body 합쳐서 RestTemplate로 보내기 위한 밑작업 */
        HttpEntity<Map<String, Object>> httpEntity = new HttpEntity<>(kakaoPayRequest.getMap(), headers);

        // 요청 보내기
        RestTemplate restTemplate = new RestTemplate();
        KakaoPayApproveResDto payApproveResDto = restTemplate.postForObject(
                kakaoPayRequest.getUrl(),
                httpEntity,
                KakaoPayApproveResDto.class);

        tidRepository.delete(orderId);

        return payApproveResDto;
    }

}
