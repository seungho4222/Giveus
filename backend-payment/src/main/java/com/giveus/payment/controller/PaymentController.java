package com.giveus.payment.controller;

import com.giveus.payment.common.dto.CommonResponseBody;
import com.giveus.payment.dto.PayInfoDto;
import com.giveus.payment.dto.response.PayApproveResDto;
import com.giveus.payment.service.KakaoPayService;
import com.giveus.payment.service.MemberFundingService;
import com.giveus.payment.service.PaymentService;
import com.giveus.payment.service.PaymentTokenService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.HttpStatus.*;

@Tag(name = "결제 API", description = "Payment")
@RestController
@RequestMapping("/api/v1/payment")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class PaymentController {

    private final PaymentTokenService paymentTokenService;
    private final PaymentService paymentService;
    private final MemberFundingService memberFundingService;
    private final KakaoPayService kakaoPayService;

    /** 결제 준비 redirect url 받기 --> 상품명과 가격을 같이 보내줘야함 */
    @PostMapping("/ready")
    public ResponseEntity<?> getRedirectUrl(@RequestBody PayInfoDto payInfoDto) {
        log.info("PayInfoDto - {}", payInfoDto);
        try {
            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, kakaoPayService.getRedirectUrl(payInfoDto)));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR)
                    .body(new CommonResponseBody<>(INTERNAL_SERVER_ERROR, e.getMessage()));
        }
    }

    /**
     * 결제 성공 pid 를  받기 위해 request를 받고 pgToken은 rediret url에 뒤에 붙어오는걸 떼서 쓰기 위함
     */
    @GetMapping("/success/{id}")
    public ResponseEntity<CommonResponseBody<?>> afterGetRedirectUrl(@PathVariable("id") int id,
                                                 @RequestParam("pg_token") String pgToken) {
        try {
            PayApproveResDto kakaoApprove = kakaoPayService.getApprove(pgToken, id);

            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, kakaoApprove));
        } catch (Exception e) {
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
                .body(new CommonResponseBody<>(EXPECTATION_FAILED,"사용자가 결제를 취소하였습니다."));
    }

    /**
     * 결제 실패
     */
    @GetMapping("/fail")
    public ResponseEntity<CommonResponseBody<String>> fail() {

        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED)
                .body(new CommonResponseBody<>(EXPECTATION_FAILED,"결제가 실패하였습니다."));

    }

    // 테스트
    @GetMapping
    public ResponseEntity<CommonResponseBody<String>> test() {

        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, "요청 잘왔음"));
    }

    // 단건 결제 요청
    @PostMapping
    public ResponseEntity<CommonResponseBody<Map<Object, Object>>> singlePay(@RequestParam("memberNo") int memberNo,
                                                                @RequestParam("fundingNo") int fundingNo,
                                                                @RequestParam("method") String method,
                                                                @RequestParam(name = "money", required = false, defaultValue = "0") int money,
                                                                @RequestParam(name = "point", required = false, defaultValue = "0") int point,
                                                                @RequestParam(name = "isPublic", defaultValue = "true") boolean isPublic) {
        Map<Object, Object> map = new HashMap<>();
        map.put("회원 PK", memberNo);
        map.put("펀딩 PK", fundingNo);
        map.put("결제수단", method);
        map.put("후원금액", money);
        map.put("사용포인트", point);
        map.put("공개여부", isPublic);
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, map));
    }
    
}
