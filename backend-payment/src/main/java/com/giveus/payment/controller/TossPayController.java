package com.giveus.payment.controller;

import com.giveus.payment.common.dto.CommonResponseBody;
import com.giveus.payment.common.swagger.SwaggerApiSuccess;
import com.giveus.payment.dto.request.TossPayDonateReq;
import com.giveus.payment.dto.request.TossPayRechargeReq;
import com.giveus.payment.dto.response.TossPayConfirmRes;
import com.giveus.payment.dto.response.TossPayReadyRes;
import com.giveus.payment.service.MemberFundingService;
import com.giveus.payment.service.PointService;
import com.giveus.payment.service.TossPayService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
    private final MemberFundingService memberFundingService;
    private final PointService pointService;

    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ISO_OFFSET_DATE_TIME;

    @SwaggerApiSuccess(summary = "토스페이 펀딩 후원 준비", implementation = TossPayReadyRes.class)
    @PostMapping("/donate/ready")
    public ResponseEntity<?> donateReady(@RequestBody TossPayDonateReq donateReq) {
        try {
            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, tossPayService.requestDonatePayment(donateReq)));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    @SwaggerApiSuccess(summary = "토스페이 펀딩 후원 승인", implementation = TossPayConfirmRes.class)
    @GetMapping("/donate/success")
    public ResponseEntity<?> donateSuccess(@RequestParam("memberNo") int memberNo,
                                           @RequestParam("fundingNo") int fundingNo,
                                           @RequestParam("point") int point,
                                           @RequestParam("opened") boolean opened,
                                           @RequestParam("orderId") String orderId,
                                           @RequestParam("paymentKey") String paymentKey,
                                           @RequestParam("amount") int amount) {

        try {
            TossPayConfirmRes res = tossPayService.paymentConfirm(orderId, paymentKey, amount);
            memberFundingService.save(memberNo, fundingNo, "토스페이",
                    res.getApprovedAt(), res.getTotalAmount(), point, opened, FORMATTER);

            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, res));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    @SwaggerApiSuccess(summary = "토스페이 펀딩 후원 실패", implementation = Map.class)
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

    @SwaggerApiSuccess(summary = "토스페이 포인트 충전 준비", implementation = TossPayReadyRes.class)
    @PostMapping("/recharge/ready")
    public ResponseEntity<?> rechargeReady(@RequestBody TossPayRechargeReq rechargeReq) {
        log.info("rechargeReq: {}", rechargeReq);
        return ResponseEntity.status(OK)
                .body(new CommonResponseBody<>(OK, tossPayService.requestRechargePayment(rechargeReq)));
    }

    @SwaggerApiSuccess(summary = "토스페이 포인트 충전 승인", implementation = TossPayConfirmRes.class)
    @GetMapping("/recharge/success")
    public ResponseEntity<?> rechargeSuccess(@RequestParam("memberNo") int memberNo,
                                             @RequestParam("orderId") String orderId,
                                             @RequestParam("paymentKey") String paymentKey,
                                             @RequestParam("amount") int amount) {
        try {
            TossPayConfirmRes res = tossPayService.paymentConfirm(orderId, paymentKey, amount);
            pointService.saveRecharge(memberNo, res.getTotalAmount(), "토스페이", res.getOrderName(), res.getApprovedAt(), FORMATTER);
            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, res));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    @SwaggerApiSuccess(summary = "토스페이 포인트 충전 실패", implementation = Map.class)
    @GetMapping("/recharge/fail")
    public ResponseEntity<?> rechargeFail(@RequestParam("code") String errorCode,
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
