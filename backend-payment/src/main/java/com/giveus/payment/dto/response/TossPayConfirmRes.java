package com.giveus.payment.dto.response;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class TossPayConfirmRes {

    private String mId;
    private String lastTransactionKey;
    private String paymentKey;
    private String orderId;
    private String orderName;
    private String status;
    private String requestedAt;
    private String approvedAt;
    private String currency;
    private int totalAmount;
    private String method;
}
