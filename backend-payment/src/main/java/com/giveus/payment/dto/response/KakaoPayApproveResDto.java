package com.giveus.payment.dto.response;

import lombok.Getter;
import lombok.ToString;

/**
 * getApproveRequest() 를 카카오페이 API에 Request로 보냈을 때 받는 Response를 위한 객체 Dto 입니다.
 * 이것 역시 공식 문서에서 직접 Custom 하여 작성하시면 됩니다.
 */
@Getter
@ToString
public class KakaoPayApproveResDto {
    private String aid; // 요청 고유 번호 - 승인/취소가 구분된 결제번호
    private String tid; // 결제 고유 번호 - 승인/취소가 동일한 결제번호
    private String cid; // 가맹점 코드
    private String partner_order_id; // 가맹점 주문번호, 최대 100자
    private String partner_user_id; // 가맹점 회원 id, 최대 100자
    private String payment_method_type; // 결제 수단, CARD 또는 MONEY 중 하나
    private Amount amount; // 결제 금액 정보
    private CardInfo card_info; // 결제 상세 정보, 결제 수단이 카드일 경우만 포함
    private String item_name; // 상품명
    private int quantity; // 상품 수량
    private String created_at; // 결제 준비 요청 시각
    private String approved_at; // 결제 승인 시각

}