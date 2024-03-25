package com.giveus.payment.controller;

import com.giveus.payment.common.dto.CommonResponseBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.HttpStatus.OK;

@Tag(name = "토스페이 API", description = "TossPay")
@RestController
@RequestMapping("/api/v1/payment/toss")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class TossPayController {

    @GetMapping
    public ResponseEntity<?> test() {
        return ResponseEntity.status(OK)
                .body(new CommonResponseBody<>(OK, "요청 잘들어옴."));
    }
}
