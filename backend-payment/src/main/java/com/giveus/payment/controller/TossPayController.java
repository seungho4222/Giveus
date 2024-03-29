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

        TossPayConfirmRes res = tossPayService.donateSuccess(orderId, paymentKey, amount);
        Integer pointUsageNo = point > 0 ? pointService.saveUsage(memberNo, point, res.getApprovedAt()) : null;
        return ResponseEntity.status(OK)
                .body(new CommonResponseBody<>(OK, "결제성공"));
    }

    @GetMapping("/donate/fail")
    public ResponseEntity<?> donateFail(@RequestParam("code") String errorCode,
                                        @RequestParam("message") String errorMessage,
                                        @RequestParam("orderId") String orderId) {
        log.info("에러코드: {}", errorCode);
        log.info("에러메시지: {}", errorMessage);
        log.info("주문번호: {}", orderId);
        return ResponseEntity.status(OK)
                .body(new CommonResponseBody<>(OK, "실패!!!!"));
    }

}
