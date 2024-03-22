package com.giveus.payment.dto.request;

import com.giveus.payment.dto.KakaoPayInfoDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

/**
 * 먼저 동작 과정에서 설명한 2번 단계로 결제 고유번호 tid와 클라이언트를 보낼 next_redirect_pc_url 을 얻기 위한 getReadyRequest() 메서드 입니다.
 * 해당 메서드는 공식 API 문서의 Request를 바탕을 만들어서 해당 문서의 설명을 참고하는 것이 더 정확할 것이다.
 * getApproveRequest() 메서드는 클라이언트의 결제 승인 정보를 받아오기 위한 메서드 입니다.
 * 위의 코드에 주석을 자세하게 달아 놓았으니 해당 내용을 참고해주세요!
 *
 * 추가로 설명할 내용은 다른 블로그와 달리 저는 성공시 redirect url에 유저 아이디를 추가했다는 점입니다.
 * getApproveRequest()에서 tid와 orderId를 이용해야 하는데 해당 내용을 카카오 API에서 success url로 redirect 시켜주었다면 따로 얻을 방법이 없어서
 * 저는 tid를 member db에 저장하고 해당 member id를 이용하여 partner_order_id 와 tid를 추가해 주는 방법을 사용하였습니다.
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class MakeKakaoPayRequest {

    @Value("${host.address}")
    private String hostAddress;

    @Value("${pay.kakao.cid}")
    private String cid;

    public KakaoPayRequest getReadyRequest(KakaoPayInfoDto kakaoPayInfoDto) {
        Map<String, Object> params = new HashMap<>();

        /** partner_user_id, partner_order_id 는 결제 승인 요청에서도 동일해야함 */
        String orderId = "F" + kakaoPayInfoDto.getFundingNo() + "M" + kakaoPayInfoDto.getMemberNo();

        // 가맹점 코드, 10자
        params.put("cid", cid);

        // 가맹점 주문번호, 최대 100자
        params.put("partner_order_id", orderId);

        // 가맹점 회원 ID, 최대 100자
        params.put("partner_user_id", "Giveus");

        // 상품명, 최대 100자
        params.put("item_name", kakaoPayInfoDto.getTitle());

        // 상품 수량
        params.put("quantity", 1);

        // 상품 총액
        params.put("total_amount", kakaoPayInfoDto.getPrice());

        // 상품 비과세 금액
        params.put("tax_free_amount", 0);

        // 결제 성공 시 redirect url, 최대 255자
        params.put("approval_url", hostAddress + "/api/v1/payment/kakao/success"
                + "?member_no=" + kakaoPayInfoDto.getMemberNo()
                + "&funding_no=" + kakaoPayInfoDto.getFundingNo()
                + "&point=" + kakaoPayInfoDto.getPoint()
                + "&opened=" + kakaoPayInfoDto.isOpened());
        // 결제 취소 시 redirect url, 최대 255자
        params.put("cancel_url", hostAddress + "/api/v1/payment/kakao/cancel");
        // 결제 실패 시 redirect url, 최대 255자
        params.put("fail_url", hostAddress + "/api/v1/payment/kakao/fail");

        log.info("params: {}", params);

        return new KakaoPayRequest("https://open-api.kakaopay.com/online/v1/payment/ready", params);
    }

    public KakaoPayRequest getApproveRequest(String tid, int memberNo, int fundingNo, String pgToken) {
        Map<String, Object> map = new HashMap<>();

        String orderId = "F" + fundingNo + "M" + memberNo;

        // 가맹점 코드, 10자
        map.put("cid", cid);

        // 결제 고유 번호, 결제 준비 API 응답에 포함
        map.put("tid", tid);

        // 가맹점 주문번호, 결제 준비 API 요청과 일치해야 함
        map.put("partner_order_id", orderId); // 주문명

        // 가맹점 회원 id, 결제 준비 API 요청과 일치해야 함
        map.put("partner_user_id", "Giveus");

        // 결제승인 요청을 인증하는 토큰
        // 사용자 결제 수단 선택 완료 시, approval_url로 redirection해줄 때 pg_token을 query string으로 전달
        map.put("pg_token", pgToken);

        return new KakaoPayRequest("https://open-api.kakaopay.com/online/v1/payment/approve", map);
    }
}
