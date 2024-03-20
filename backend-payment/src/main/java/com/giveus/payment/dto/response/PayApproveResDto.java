package com.giveus.payment.dto.response;

import lombok.Getter;
import lombok.ToString;

/**
 * getApproveRequest() 를 카카오페이 API에 Request로 보냈을 때 받는 Response를 위한 객체 Dto 입니다.
 * 이것 역시 공식 문서에서 직접 Custom 하여 작성하시면 됩니다.
 */
@Getter
@ToString
public class PayApproveResDto {
    private Amount amount; // 결제 금액 정보
    private String item_name; // 상품명
    private String created_at; // 결제 요청 시간
    private String approved_at; // 결제 승인 시간

}