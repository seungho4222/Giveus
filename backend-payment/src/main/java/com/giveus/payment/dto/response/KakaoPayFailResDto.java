package com.giveus.payment.dto.response;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class KakaoPayFailResDto {
    private int error_code;
    private String error_message;
    private Extras extras;
}
