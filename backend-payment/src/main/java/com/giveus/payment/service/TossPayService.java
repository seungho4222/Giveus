package com.giveus.payment.service;

import com.giveus.payment.common.repository.TidRepository;
import com.giveus.payment.dto.request.TossPayDonateReq;
import com.giveus.payment.dto.response.KakaoPayReadyResDto;
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

import java.util.HashMap;
import java.util.Map;

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
    public Object requestPayment(TossPayDonateReq donateReq) {

        /** 요청 헤더 */
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        /** 요청 바디 */
        Map<String, Object> params = new HashMap<>();

        String orderNo = "TOSS_F" + donateReq.getFundingNo() + "M" + donateReq.getMemberNo();
        // 상점 주문 번호 : 추후 상점 주문 번호와 결제 정보를 매칭하기 위해 필요합니다.
        params.put("orderNo", orderNo);
        // 결제 금액 : 손님으로부터 받을 총 결제금액
        params.put("amount", donateReq.getPrice());
        // 비과세 금액 : 손님으로부터 받을 금액 중 비과세 금액
        params.put("amountTaxFree", 0);
        // 상품명 : 결제할 상품에 대한 정보
        params.put("productDesc", donateReq.getTitle());
        // 상점 API Key : 이곳에 '테스트용 Key'를 넣으면 테스트 결제가, '실거래용 Key'를 넣으면 진짜 출금되는 결제가 생성됩니다.
        params.put("apiKey", secretKey);
        // 자동 승인 설정 : true를 사용하는 경우, 구매자 인증이 완료되면 토스가 알아서 승인을 진행합니다.
        params.put("autoExecute", true);
        // 결제 결과 Callback URL : 자동 승인 설정을 true로 설정할 경우에는 반드시 함께 보내주셔야 합니다.
        // 토스 서버는 출금을 성공한 후 이 곳에 입력한 가맹점 서버로 callback을 HttpMethod POST 로 요청합니다.
        // 최종적으로 토스 결제완료 여부를 확인할 수 있습니다.
        params.put("resultCallback", hostAddress + "/api/v1/payment/point/callback");
        // 인증 완료 후 연결할 URL : 구매자가 결제 인증을 완료하면 이 곳에 입력한 URL로 연결해드립니다.
        // 이 URL은 단순히 가맹점의 결제 완료 페이지의 이동을 위해 사용됩니다.
        params.put("retUrl", hostAddress + "/api/v1/payment/point/ret");
        // 결제 중단 시 사용자를 이동시킬 가맹점 페이지 : 토스페이창에 진입한 사용자가 결제를 중단할 때 사용자를 이동시킬 가맹점 취소 페이지 URL을 입력해주세요.
        params.put("retCancelUrl", hostAddress + "/api/v1/payment/point/cancel");

        /** Header와 Body 합쳐서 RestTemplate로 보내기 위한 밑작업 */
        HttpEntity<Map<String, Object>> httpEntity = new HttpEntity<>(params, headers);

        /** RestTemplate로 Response 받아와서 DTO로 변환후 return */
        RestTemplate restTemplate = new RestTemplate();
        TossPayCreateRes res = restTemplate.postForObject(
                "https://pay.toss.im/api/v2/payments",
                httpEntity,
                TossPayCreateRes.class);

        /** Tid Redis에 10분간 저장 */
        tidRepository.save(orderNo, res.getPayToken(), 10L);

        return null;
    }
}
