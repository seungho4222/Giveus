package com.giveus.notification.exception;

public class NotificationDeleteFailedException extends RuntimeException {
    public static final String MESSAGE = "존재하지 않는 알림입니다.";

    public NotificationDeleteFailedException() {
        super(MESSAGE);
    }
}
