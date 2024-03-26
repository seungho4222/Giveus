package com.giveus.payment.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@Schema(description = "토스페이 결제 생성 성공 시 응답 바디")
public class TossPayCreateRes {

    @Schema(description = "응답 코드 ('0'은 결제 생성에 '성공', 그 외에는 오류코드와 메시지가 전달됨)", example = "0")
    private int code;
    @Schema(description = "결제를 진행할 수 있는 토스페이 웹페이지 URL. 상점에서는 이 URL을 사용자에게 띄워줌", example = "https://pay.toss.im/payfront/auth?payToken=test_token1234567890")
    private String checkoutPage;
    @Schema(description = "거래를 구분할 수 있는 토스 고유 값. 결제를 진행할 때, 결제를 환불할 때, 결제의 현재 상태를 파악할 때 이 고유번호를 통해 해당 결제 건에 접근하게 되니 잘 보관해야함.", example = "example-payToken")
    private String payToken;

}
