package com.giveus.payment.dto.response;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PointRechargeRes {

    private int pointNo;
    private int amount;
    private LocalDateTime createdAt;
    private String content;
    private String paymentType;

}
