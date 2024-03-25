package com.giveus.funding.controller;

import com.giveus.funding.common.dto.CommonResponseBody;
import com.giveus.funding.common.swagger.SwaggerApiSuccess;
import com.giveus.funding.dto.response.ReviewDetailRes;
import com.giveus.funding.service.ReviewService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@Tag(name = "펀딩 후기 API", description = "User")
@RestController
@RequestMapping("/api/v1/review")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ReviewController {

    private final ReviewService reviewService;

    // 펀딩 후기 목록 조회 api 생성 => 메인에 (limit 개수 요청)
    @SwaggerApiSuccess(summary = "펀딩 후기 전체 조회", implementation = ReviewDetailRes.class)
    @GetMapping("/findAll/{count}")
    public ResponseEntity<CommonResponseBody<List<ReviewDetailRes>>> getReviewList(@PathVariable int count) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, reviewService.getReviewList(count)));
    }

    // 펀딩 후기 상세 조회 api 생성
    @SwaggerApiSuccess(summary = "펀딩 후기 상세 조회", implementation = ReviewDetailRes.class)
    @GetMapping("/{fundingNo}")
    public ResponseEntity<CommonResponseBody<ReviewDetailRes>> getReview(@PathVariable int fundingNo) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, reviewService.getReview(fundingNo)));
    }


}
