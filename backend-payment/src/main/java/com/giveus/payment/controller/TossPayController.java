package com.giveus.payment.controller;

import com.giveus.payment.common.dto.CommonResponseBody;
import com.giveus.payment.dto.request.TossPayDonateReq;
import com.giveus.payment.dto.response.TossPayConfirmRes;
import com.giveus.payment.service.MemberFundingService;
import com.giveus.payment.service.PaymentService;
import com.giveus.payment.service.PointService;
import com.giveus.payment.service.TossPayService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.OK;

@Tag(name = "토스페이 API", description = "TossPay")
@RestController
@RequestMapping("/api/v1/payment/toss")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class TossPayController {

    private final TossPayService tossPayService;
    private final PaymentService paymentService;
    private final MemberFundingService memberFundingService;
    private final PointService pointService;

    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ISO_OFFSET_DATE_TIME;

    @PostMapping("/donate/ready")
    public ResponseEntity<?> donateReady(@RequestBody TossPayDonateReq donateReq) {
        try {
            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, tossPayService.requestPayment(donateReq)));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    @GetMapping("/donate/success")
    public ResponseEntity<?> donateSuccess(@RequestParam("memberNo") int memberNo,
                                           @RequestParam("fundingNo") int fundingNo,
                                           @RequestParam("point") int point,
                                           @RequestParam("opened") boolean opened,
                                           @RequestParam("orderId") String orderId,
                                           @RequestParam("paymentKey") String paymentKey,
                                           @RequestParam("amount") int amount) {

        try {
            TossPayConfirmRes res = tossPayService.donateSuccess(orderId, paymentKey, amount);
            memberFundingService.save(memberNo, fundingNo, "토스페이",
                    res.getApprovedAt(), res.getTotalAmount(), point, opened, FORMATTER);

            return ResponseEntity.status(OK)
                .body(new CommonResponseBody<>(OK, "토스페이 결제성공"));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    @GetMapping("/donate/fail")
    public ResponseEntity<?> donateFail(@RequestParam("code") String errorCode,
                                        @RequestParam("message") String errorMessage,
                                        @RequestParam("orderId") String orderId) {
        Map<String, String> map = new HashMap<>();
        map.put("에러코드", errorCode);
        map.put("에러메시지", errorMessage);
        map.put("주문번호", orderId);
        return ResponseEntity.status(OK)
                .body(new CommonResponseBody<>(OK, map));
    }

}
