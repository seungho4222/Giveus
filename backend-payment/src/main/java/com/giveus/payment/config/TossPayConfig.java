package com.giveus.payment.config;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
@Getter
public class TossPayConfig {

    @Value("${pay.toss.client-key}")
    private String clientKey;

    @Value("${pay.toss.secret-key}")
    private String secretKey;

    @Value("${pay.toss.success_url}")
    private String successUrl;

    @Value("${pay.toss.fail_url}")
    private String failUrl;

    public static final String URL = "https://api.tosspayments.com/v1/payments";
}
