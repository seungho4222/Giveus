package com.giveus.payment.controller;

import com.giveus.payment.common.dto.CommonResponseBody;
import com.giveus.payment.common.swagger.SwaggerApiNotFoundError;
import com.giveus.payment.common.swagger.SwaggerApiSuccess;
import com.giveus.payment.dto.KakaoPayInfoDto;
import com.giveus.payment.dto.request.KakaoPayPointRechargeReq;
import com.giveus.payment.dto.response.KakaoPayApproveResDto;
import com.giveus.payment.dto.response.KakaoPayReadyResDto;
import com.giveus.payment.service.KakaoPayService;
import com.giveus.payment.service.MemberFundingService;
import com.giveus.payment.service.PaymentService;
import com.giveus.payment.service.PointService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import static org.springframework.http.HttpStatus.*;

@Tag(name = "카카오페이 API", description = "KakaoPay")
@RestController
@RequestMapping("/api/v1/payment/kakao")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class KakaoPayController {

    private final KakaoPayService kakaoPayService;
    private final PaymentService paymentService;
    private final MemberFundingService memberFundingService;
    private final PointService pointService;

    @SwaggerApiSuccess(summary = "포인트 충전 - 카카오페이 단건 결제 준비", implementation = KakaoPayReadyResDto.class)
    @PostMapping("/point/ready")
    public ResponseEntity<?> readyRecharge(@RequestBody KakaoPayPointRechargeReq rechargeReq) {
        try {
            return ResponseEntity.status(OK)
                .body(new CommonResponseBody<>(OK, kakaoPayService.getRedirectUrl(rechargeReq)));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    @SwaggerApiSuccess(summary = "후원하기 - 카카오페이 단결 결제 준비", implementation = KakaoPayReadyResDto.class)
    @PostMapping("/donate/ready")
    public ResponseEntity<?> readyDonate(@RequestBody KakaoPayInfoDto kakaoPayInfoDto) {
        log.info("KakaopayInfoDto - {}", kakaoPayInfoDto);
        try {
            KakaoPayReadyResDto kakaoReady = kakaoPayService.getRedirectUrl(kakaoPayInfoDto);

            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, kakaoReady));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    @SwaggerApiSuccess(summary = "포인트 충전 - 카카오페이 단건 결제 성공", implementation = KakaoPayApproveResDto.class)
    @GetMapping("/point/success")
    public ResponseEntity<CommonResponseBody<?>> approveRecharge(@RequestParam("member_no") int memberNo,
                                                                 @RequestParam("amount") int amount,
                                                                 @RequestParam("pg_token") String pgToken) {
        try {
            KakaoPayApproveResDto kakaoApprove = kakaoPayService.getApprove(pgToken, memberNo);
            pointService.saveRecharge(memberNo, amount, LocalDateTime.now());
            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, kakaoApprove));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    @SwaggerApiSuccess(summary = "후원하기 - 카카오페이 단건 결제 성공", implementation = KakaoPayApproveResDto.class)
    @GetMapping("/donate/success")
    public ResponseEntity<CommonResponseBody<?>> approveDonate(@RequestParam("member_no") int memberNo,
                                                 @RequestParam("funding_no") int fundingNo,
                                                 @RequestParam("point") int point,
                                                 @RequestParam("opened") boolean opened,
                                                 @RequestParam("pg_token") String pgToken) {
        try {
            KakaoPayApproveResDto res = kakaoPayService.getApprove(pgToken, memberNo, fundingNo);
            Integer pointUsageNo = point > 0 ? pointService.saveUsage(memberNo, point, res.getApproved_at(), DateTimeFormatter.ISO_LOCAL_DATE_TIME) : null;
            int paymentNo = paymentService.save(res.getApproved_at(), "카카오페이", res.getAmount().getTotal(), DateTimeFormatter.ISO_LOCAL_DATE_TIME);
            memberFundingService.save(memberNo, fundingNo, paymentNo, pointUsageNo,
                    res.getApproved_at(), res.getAmount().getTotal() + point, opened, DateTimeFormatter.ISO_LOCAL_DATE_TIME);

            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, res));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    @SwaggerApiSuccess(summary = "후원하기 - 카카오페이 결제 취소", implementation = String.class)
    @GetMapping("/donate/cancel")
    public ResponseEntity<CommonResponseBody<String>> cancelDonate() {
        return ResponseEntity.status(EXPECTATION_FAILED)
                .body(new CommonResponseBody<>(EXPECTATION_FAILED,"사용자가 결제를 취소했습니다."));
    }

    @SwaggerApiSuccess(summary = "후원하기 - 카카오페이 결제 오류", implementation = String.class)
    @GetMapping("/donate/fail")
    public ResponseEntity<CommonResponseBody<String>> failDonate() {
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED)
                .body(new CommonResponseBody<>(EXPECTATION_FAILED,"결제에 실패했습니다."));
    }
    
}
