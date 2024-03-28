package com.giveus.funding.domain.review.api;

import com.giveus.funding.global.common.response.CommonResponseBody;
import com.giveus.funding.global.common.response.CreateSuccessDto;
import com.giveus.funding.global.config.SwaggerApiSuccess;
import com.giveus.funding.domain.review.dto.ReviewCreateReq;
import com.giveus.funding.domain.review.dto.ReviewDetailRes;
import com.giveus.funding.domain.funding.application.FundingService;
import com.giveus.funding.domain.review.application.ReviewService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@Tag(name = "펀딩 후기 API")
@RestController
@RequestMapping("/api/v1/review")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ReviewController {
    private final FundingService fundingService;
    private final ReviewService reviewService;

    /**
     * 펀딩 후기 목록 조회 api입니다. limit개의 후기를 조회합니다.
     *
     * @param count limit 개수
     * @return 조회한 후기 목록
     */
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

    @SwaggerApiSuccess(summary = "펀딩 후기 등록", implementation = CreateSuccessDto.class)
    @PostMapping("/review")
    public ResponseEntity<CommonResponseBody<CreateSuccessDto>> createReview(
            @Valid @RequestPart ReviewCreateReq reviewCreateReq, @RequestPart(required = false) MultipartFile file) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.createReview(reviewCreateReq, file)));
    }


}
