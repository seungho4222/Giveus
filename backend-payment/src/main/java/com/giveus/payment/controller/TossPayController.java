package com.giveus.payment.controller;

import com.giveus.payment.common.dto.CommonResponseBody;
import com.giveus.payment.dto.request.TossPayDonateReq;
import com.giveus.payment.service.TossPayService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.OK;

@Tag(name = "토스페이 API", description = "TossPay")
@RestController
@RequestMapping("/api/v1/payment/toss")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class TossPayController {

    private final TossPayService tossPayService;

    @GetMapping
    public ResponseEntity<?> test() {
        return ResponseEntity.status(OK)
                .body(new CommonResponseBody<>(OK, "요청 잘들어옴."));
    }

    @PostMapping("/donate/ready")
    public ResponseEntity<?> requestPayment(@RequestBody TossPayDonateReq donateReq) {
        return ResponseEntity.status(OK)
                .body(new CommonResponseBody<>(OK, tossPayService.requestPayment(donateReq)));
    }

}
