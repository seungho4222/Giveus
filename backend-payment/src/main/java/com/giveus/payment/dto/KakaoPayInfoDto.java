package com.giveus.payment.dto;


import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.ToString;

/**
 * 결제시스템 동작과정 첫 시작부분에 사용되는 Dto
 * React에게서 받아오는 내용으로 가격과, 상품이름 받아오도록 설정했음.
 * 카카오 API에 Request로 보내고 싶은 정보를 더 추가해서 Custom해서 사용하면 될듯.
 */
@Schema(description = "카카오페이 결제 준비 요청")
@Getter
@ToString
public class KakaoPayInfoDto {
    @Schema(description = "회원 PK", example = "1")
    private int memberNo;
    @Schema(description = "펀딩 PK", example = "1")
    private int fundingNo;
    @Schema(description = "후원 금액 (카카오페이 결제 준비 요청 시 후원 금액은 최소 1원 이상이어야 함)", example = "1000")
    private int price;
    @Schema(description = "사용 포인트", example = "0")
    private int point;
    @Schema(description = "펀딩 제목", example = "펀딩 123")
    private String title;
    @Schema(description = "공개 여부", example = "true")
    private boolean opened;
}
