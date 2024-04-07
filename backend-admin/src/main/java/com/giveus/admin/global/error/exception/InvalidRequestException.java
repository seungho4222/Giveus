package com.giveus.admin.global.error.exception;

public class InvalidRequestException extends RuntimeException {
    public static final String MESSAGE = "잘못된 요청입니다.";

    public InvalidRequestException() {
        super(MESSAGE);
    }
}
