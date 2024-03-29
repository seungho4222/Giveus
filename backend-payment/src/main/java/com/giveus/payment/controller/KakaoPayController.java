package com.giveus.payment.controller;

import com.giveus.payment.common.dto.CommonResponseBody;
import com.giveus.payment.common.swagger.SwaggerApiSuccess;
import com.giveus.payment.dto.request.KakaoPayDonateReq;
import com.giveus.payment.dto.request.KakaoPayRechargeReq;
import com.giveus.payment.dto.response.KakaoPayApproveRes;
import com.giveus.payment.dto.response.KakaoPayReadyRes;
import com.giveus.payment.service.KakaoPayService;
import com.giveus.payment.service.MemberFundingService;
import com.giveus.payment.service.PointService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    private final MemberFundingService memberFundingService;
    private final PointService pointService;

    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ISO_LOCAL_DATE_TIME;

    @SwaggerApiSuccess(summary = "카카오페이 포인트 충전 준비", implementation = KakaoPayReadyRes.class)
    @PostMapping("/recharge/ready")
    public ResponseEntity<?> readyRecharge(@RequestBody KakaoPayRechargeReq rechargeReq) {
        try {
            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, kakaoPayService.getRedirectUrl(rechargeReq)));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    @SwaggerApiSuccess(summary = "카카오페이 펀딩 후원 준비", implementation = KakaoPayReadyRes.class)
    @PostMapping("/donate/ready")
    public ResponseEntity<?> readyDonate(@RequestBody KakaoPayDonateReq donateReq) {
        try {
            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, kakaoPayService.getRedirectUrl(donateReq)));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    @SwaggerApiSuccess(summary = "카카오페이 포인트 충전 성공", implementation = KakaoPayApproveRes.class)
    @GetMapping("/recharge/success")
    public ResponseEntity<CommonResponseBody<?>> approveRecharge(@RequestParam("member_no") int memberNo,
                                                                 @RequestParam("pg_token") String pgToken) {
        try {
            KakaoPayApproveRes res = kakaoPayService.getApprove(pgToken, memberNo);
            pointService.saveRecharge(memberNo, res.getAmount().getTotal(), "카카오페이", res.getItem_name(), res.getApproved_at(), FORMATTER);
            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, res));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    @SwaggerApiSuccess(summary = "카카오페이 펀딩 후원 성공", implementation = KakaoPayApproveRes.class)
    @GetMapping("/donate/success")
    public ResponseEntity<CommonResponseBody<?>> approveDonate(@RequestParam("member_no") int memberNo,
                                                               @RequestParam("funding_no") int fundingNo,
                                                               @RequestParam("point") int point,
                                                               @RequestParam("opened") boolean opened,
                                                               @RequestParam("pg_token") String pgToken) {
        try {
            KakaoPayApproveRes res = kakaoPayService.getApprove(pgToken, memberNo, fundingNo);
            memberFundingService.save(memberNo, fundingNo, "카카오페이",
                    res.getApproved_at(), res.getAmount().getTotal(), point, opened, FORMATTER);

            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, res));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    @SwaggerApiSuccess(summary = "카카오페이 펀딩 후원 취소", implementation = String.class)
    @GetMapping("/donate/cancel")
    public ResponseEntity<CommonResponseBody<String>> cancelDonate() {
        return ResponseEntity.status(EXPECTATION_FAILED)
                .body(new CommonResponseBody<>(EXPECTATION_FAILED, "사용자가 결제를 취소했습니다."));
    }

    @SwaggerApiSuccess(summary = "카카오페이 펀딩 후원 실패", implementation = String.class)
    @GetMapping("/donate/fail")
    public ResponseEntity<CommonResponseBody<String>> failDonate() {
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED)
                .body(new CommonResponseBody<>(EXPECTATION_FAILED, "결제에 실패했습니다."));
    }

}
