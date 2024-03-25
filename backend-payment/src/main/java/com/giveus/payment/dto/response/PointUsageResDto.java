package com.giveus.payment.dto.response;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PointUsageResDto {

    private int pointNo;
    private int amount;
    private LocalDateTime createdAt;
    private String title; // 펀딩 제목

}
