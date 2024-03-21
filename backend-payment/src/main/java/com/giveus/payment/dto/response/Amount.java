package com.giveus.payment.dto.response;

import lombok.Getter;

/**
 * getApproveRequest() 를 카카오페이 API에 Request로 보냈을 때 받는 Response를 위한 객체 Dto 입니다.
 * 이것 역시 공식 문서에서 직접 Custom 하여 작성하시면 됩니다.
 */
@Getter
public class Amount {
    private int total; // 총 결제 금액
    private int tax_free; // 비과세 금액
    private int tax; // 부가세 금액
}