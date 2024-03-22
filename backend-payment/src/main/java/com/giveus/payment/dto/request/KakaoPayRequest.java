package com.giveus.payment.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import java.util.Map;

@Getter
@AllArgsConstructor
@ToString
public class KakaoPayRequest {

    // 요청을 보낼 카카오 API URL
    private String url;

    // 해당 요청을 담을 Request
    private Map<String, Object> map;
}
