package com.giveus.payment.controller;

import com.giveus.payment.common.dto.CommonResponseBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.OK;

@Tag(name = "Payment API", description = "결제")
@RestController
@RequestMapping("/api/v1/payment")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PaymentController {

    @GetMapping
    public ResponseEntity<CommonResponseBody<String>> test() {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, "요청 잘왔음"));
    }
    
}
