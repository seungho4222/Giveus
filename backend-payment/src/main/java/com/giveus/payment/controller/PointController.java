package com.giveus.payment.controller;

import com.giveus.payment.common.dto.CommonResponseBody;
import com.giveus.payment.common.swagger.SwaggerApiSuccess;
import com.giveus.payment.dto.request.PointUsageReq;
import com.giveus.payment.dto.response.PointListRes;
import com.giveus.payment.service.MemberFundingService;
import com.giveus.payment.service.PointService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

@Tag(name = "포인트 API", description = "Point")
@RestController
@RequestMapping("/api/v1/payment/point")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class PointController {

    private final PointService pointService;
    private final MemberFundingService memberFundingService;

    @SwaggerApiSuccess(summary = "회원 포인트 충전 및 사용 내역 조회", implementation = PointListRes.class)
    @GetMapping("/{memberNo}")
    public ResponseEntity<CommonResponseBody<PointListRes>> getPointList(@PathVariable("memberNo") int memberNo) {
        return ResponseEntity.status(OK)
                .body(new CommonResponseBody<>(OK, pointService.getPointList(memberNo)));
    }

    @SwaggerApiSuccess(summary = "포인트 펀딩 후원", implementation = String.class)
    @PostMapping
    public ResponseEntity<CommonResponseBody<String>> payPoint(@RequestBody PointUsageReq request) {
        try {
            LocalDateTime now = LocalDateTime.now();
            int pointNo = pointService.usePoint(request, now);
            int memberFundingNo = memberFundingService.save(request, pointNo, now);
            return ResponseEntity.status(OK)
                    .body(new CommonResponseBody<>(OK, "포인트 펀딩 후원에 성공했습니다."));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED)
                    .body(new CommonResponseBody<>(EXPECTATION_FAILED, "포인트 펀딩 후원에 실패했습니다."));
        }
    }
}
