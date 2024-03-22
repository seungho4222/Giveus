package com.giveus.payment.controller;

import com.giveus.payment.common.dto.CommonResponseBody;
import com.giveus.payment.dto.KakaoPayInfoDto;
import com.giveus.payment.dto.response.KakaoPayApproveResDto;
import com.giveus.payment.dto.response.KakaoPayReadyResDto;
import com.giveus.payment.service.KakaoPayService;
import com.giveus.payment.service.MemberFundingService;
import com.giveus.payment.service.PaymentService;
import com.giveus.payment.service.PointUsageService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

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
    private final PointUsageService pointUsageService;

    /** 결제 준비 redirect url 받기 --> 상품명과 가격을 같이 보내줘야함 */
    @PostMapping("/ready")
    public ResponseEntity<?> getRedirectUrl(@RequestBody KakaoPayInfoDto kakaoPayInfoDto) {
        log.info("KakaopayInfoDto - {}", kakaoPayInfoDto);
        try {
            KakaoPayReadyResDto kakaoReady = kakaoPayService.getRedirectUrl(kakaoPayInfoDto);

            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, kakaoReady));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    /**
     * 결제 성공 pid 를  받기 위해 request를 받고 pgToken은 rediret url에 뒤에 붙어오는걸 떼서 쓰기 위함
     */
    @GetMapping("/success")
    public ResponseEntity<CommonResponseBody<?>> afterGetRedirectUrl(@RequestParam("member_no") int memberNo,
                                                 @RequestParam("funding_no") int fundingNo,
                                                 @RequestParam("point") int point,
                                                 @RequestParam("opened") boolean opened,
                                                 @RequestParam("pg_token") String pgToken) {
        try {
            KakaoPayApproveResDto kakaoApprove = kakaoPayService.getApprove(pgToken, memberNo, fundingNo);
            Integer pointUsageNo = point > 0 ? pointUsageService.save(memberNo, point, kakaoApprove.getApproved_at()) : null;
            int paymentNo = paymentService.save(kakaoApprove);
            memberFundingService.save(memberNo, fundingNo, paymentNo, pointUsageNo,
                    kakaoApprove.getApproved_at(), kakaoApprove.getAmount().getTotal(), opened);

            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, kakaoApprove));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    /**
     * 결제 진행 중 취소
     */
    @GetMapping("/cancel")
    public ResponseEntity<CommonResponseBody<String>> cancel() {
        return ResponseEntity.status(EXPECTATION_FAILED)
                .body(new CommonResponseBody<>(EXPECTATION_FAILED,"사용자가 결제를 취소했습니다."));
    }

    /**
     * 결제 실패
     */
    @GetMapping("/fail")
    public ResponseEntity<CommonResponseBody<String>> fail() {

        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED)
                .body(new CommonResponseBody<>(EXPECTATION_FAILED,"결제에 실패했습니다."));

    }
    
}
