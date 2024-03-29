package com.giveus.payment.dto.response;

import lombok.*;

@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TossPayReadyRes {

    private int amount;
    private String orderId;
    private String orderName;
    private String customerEmail;
    private String customerName;
    private String successUrl;
    private String failUrl;
}
