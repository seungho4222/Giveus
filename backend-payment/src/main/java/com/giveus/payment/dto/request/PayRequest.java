package com.giveus.payment.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.util.LinkedMultiValueMap;

@Getter
@AllArgsConstructor
public class PayRequest {

    // 요청을 보낼 카카오 API URL
    private String url;

    // 해당 요청을 담을 Request
    private LinkedMultiValueMap<String, String> map;
}
