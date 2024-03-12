package com.giveus.auth.common;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
public class BaseResponseBody {

    String message = null;
    Integer statusCode = null;

    public BaseResponseBody() {
    }

    public BaseResponseBody(HttpStatus statusCode) {
        this.statusCode = statusCode.value();
    }

    public BaseResponseBody(HttpStatus statusCode, String message) {
        this.statusCode = statusCode.value();
        this.message = message;
    }

    public static BaseResponseBody of(HttpStatus statusCode, String message) {
        BaseResponseBody body = new BaseResponseBody();
        body.message = message;
        body.statusCode = statusCode.value();
        return body;
    }


}