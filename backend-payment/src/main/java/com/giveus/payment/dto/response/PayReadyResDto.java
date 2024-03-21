package com.giveus.payment.dto.response;

import lombok.Getter;

/**
 * getReadyRequest()를 카카오페이 API에 Request로 보내면 얻는 Response를 Java 객체로 변환하기 위한 Dto
 * pc 웹을 만들어서 pc_url만 받았지만 공식문서의 URL을 참고하여 얻고 싶은 Response를 Custom 하면 된다.
 * tid는 필수로 얻어야하고, url도 하나는 무조건 얻어야함.
 */
@Getter
public class PayReadyResDto {
    private String tid; // 결제 고유 번호
//    private String next_redirect_pc_url; // pc 웹일 경우 받는 결제 페이지
    private String next_redirect_mobile_url;
    private String next_redirect_app_url;
    private String created_at;
}
