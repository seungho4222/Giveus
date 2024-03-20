package com.giveus.payment.dto.request;

import com.giveus.payment.dto.PayInfoDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;

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
public class MakePayRequest {

    @Value("${server.address}")
    private String address;

//    @Value("${pay.kakao.secret-key}")
//    private String clientId;

    public PayRequest getReadyRequest(int id, PayInfoDto payInfoDto) {
        LinkedMultiValueMap<String, String> map = new LinkedMultiValueMap<>();

        /** partner_user_id, partner_order_id 는 결제 승인 요청에서도 동일해야함 */
        String orderId = "point" + id;

        // 가맹점 코드, 10자
        map.add("cid", "TC0ONETIME");

        // partner_order_id는 유저 id와 상품명으로 정하였다.
        // 해당내용은 자유롭게 정하시면 됩니다.
        // 중요한점은 다음 결제 승인 정보를 얻을 때
        // 아래 partner_order_id, partner_user_id 가 동일해야 합니다.

        // 가맹점 주문번호, 최대 100자
        map.add("partner_order_id", orderId);

        // 가맹점 회원 ID, 최대 100자
        map.add("partner_user_id", "Giveus");

        // 리액트에서 받아온 payInfoDto로 결저 주문서의 item 이름을
        // 지어주는 과정입니다.

        // 상품명, 최대 100자
        map.add("item_name", payInfoDto.getItemName());

        // 상품 수량
        map.add("quantity", "1");

        // 상품 총액
        map.add("total_amount", payInfoDto.getPrice() + "");

        // 상품 비과세 금액
        map.add("tax_free_amount", "0");

        // 아래 url은 사용자가 결제 url에서 결제를 성공, 실패, 취소시
        // redirect할 url로 위에서 설명한 동작 과정에서 5번과 6번 사이 과정에서
        // 나온 결과로 이동할 url을 설정해 주는 것입니다.

        // 결제 성공 시 redirect url, 최대 255자
        map.add("approval_url", "http://" + address + ":8084/api/v1/payment/success/" + id);
        // 결제 취소 시 redirect url, 최대 255자
        map.add("cancel_url", "http://" + address + ":8084/api/v1/payment/cancel");
        // 결제 실패 시 redirect url, 최대 255자
        map.add("fail_url", "http://" + address + ":8084/api/v1/payment/fail");

        log.info("map: {}", map);
        return new PayRequest("https://open-api.kakaopay.com/online/v1/payment/ready", map);
    }

    public PayRequest getApproveRequest(String tid, int id, String pgToken) {
        LinkedMultiValueMap<String, String> map = new LinkedMultiValueMap<>();

        String orderId = "point" + id;

        // 가맹점 코드, 10자
        map.add("cid", "TC0ONETIME");

        // getReadyRequest 에서 받아온 tid

        // 결제 고유 번호, 결제 준비 API 응답에 포함
        map.add("tid", tid);

        // 가맹점 주문번호, 결제 준비 API 요청과 일치해야 함
        map.add("partner_order_id", orderId); // 주문명

        // 가맹점 회원 id, 결제 준비 API 요청과 일치해야 함
        map.add("partner_user_id", "Giveus");

        // getReadyRequest에서 받아온 redirect url에 클라이언트가
        // 접속하여 결제를 성공시키면 아래의 url로 redirect 되는데
        //http://localhost:8080/payment/success"+"/"+id
        // 여기에 &pg_token= 토큰값 이 붙어서 redirect 된다.
        // 해당 내용을 뽑아 내서 사용하면 된다.

        // 결제승인 요청을 인증하는 토큰
        // 사용자 결제 수단 선택 완료 시, approval_url로 redirection해줄 때 pg_token을 query string으로 전달
        map.add("pg_token", pgToken);

        return new PayRequest("https://open-api.kakaopay.com/online/v1/payment/approve", map);
    }
}
