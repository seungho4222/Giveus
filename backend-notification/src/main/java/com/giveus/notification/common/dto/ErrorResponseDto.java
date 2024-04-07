package com.giveus.notification.common.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@NoArgsConstructor
public class ErrorResponseDto {
    private int statusCode;
    private String message;

    public ErrorResponseDto(HttpStatus status, String message) {
        this.statusCode = status.value();
        this.message = message;
    }
}