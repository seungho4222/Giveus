package com.giveus.admin.exception;

public class UsageHistoryNotFoundException extends RuntimeException {
    public static final String MESSAGE = "펀딩에 사용 내역이 존재하지 않습니다.";

    public UsageHistoryNotFoundException() {
        super(MESSAGE);
    }
}
