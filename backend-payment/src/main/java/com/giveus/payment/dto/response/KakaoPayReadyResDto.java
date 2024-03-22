package com.giveus.payment.dto.response;

import lombok.Getter;
import lombok.ToString;

/**
 * getReadyRequest()를 카카오페이 API에 Request로 보내면 얻는 Response를 Java 객체로 변환하기 위한 Dto
 * tid는 필수로 얻어야하고, url도 하나는 무조건 얻어야함.
 */
@Getter
@ToString
public class KakaoPayReadyResDto {
    private String tid; // 결제 고유 번호, 20자
    private String next_redirect_app_url; // 요청한 클라이언트(Client)가 모바일 앱일 경우, 카카오톡 결제 페이지 Redirect URL
    private String next_redirect_mobile_url; // 요청한 클라이언트가 모바일 웹일 경우 카카오톡 결제 페이지 Redirect URL
    private String created_at; // 결제 준비 요청 시간
}
