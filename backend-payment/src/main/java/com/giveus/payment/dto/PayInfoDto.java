package com.giveus.payment.dto;


import lombok.Getter;
import lombok.ToString;

/**
 * 결제시스템 동작과정 첫 시작부분에 사용되는 Dto
 * React에게서 받아오는 내용으로 가격과, 상품이름 받아오도록 설정했음.
 * 카카오 API에 Request로 보내고 싶은 정보를 더 추가해서 Custom해서 사용하면 될듯.
 */
@Getter
@ToString
public class PayInfoDto {
    private int price;
    private String itemName;
}
