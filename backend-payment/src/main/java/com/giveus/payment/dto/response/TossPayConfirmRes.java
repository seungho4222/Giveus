package com.giveus.payment.dto.response;

import lombok.Getter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@ToString
public class TossPayConfirmRes {

    private String mid;
    private String lastTransactionKey;
    private String paymentKey;
    private String orderId;
    private String orderName;
    private String status;
    private LocalDateTime requestedAt;
    private LocalDateTime approvedAt;
    private String currency;
    private Long totalAmount;
    private String method;
}
