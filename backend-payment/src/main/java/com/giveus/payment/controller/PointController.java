package com.giveus.payment.controller;

import com.giveus.payment.common.dto.CommonResponseBody;
import com.giveus.payment.common.swagger.SwaggerApiSuccess;
import com.giveus.payment.dto.response.PointListRes;
import com.giveus.payment.service.PointService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.OK;

@Tag(name = "포인트 API", description = "Point")
@RestController
@RequestMapping("/api/v1/payment/point")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class PointController {

    private final PointService pointService;

    @SwaggerApiSuccess(summary = "회원 포인트 내역 조회", implementation = PointListRes.class)
    @GetMapping("/{memberNo}")
    public ResponseEntity<CommonResponseBody<PointListRes>> getPointList(@PathVariable("memberNo") int memberNo) {
        return ResponseEntity.status(OK)
                .body(new CommonResponseBody<>(OK, pointService.getPointList(memberNo)));
    }
}
