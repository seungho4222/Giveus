package com.giveus.funding.controller;

import com.giveus.funding.common.dto.CommonResponseBody;
import com.giveus.funding.common.dto.CreateSuccessDto;
import com.giveus.funding.common.swagger.SwaggerApiSuccess;
import com.giveus.funding.dto.request.FundingCreateReq;
import com.giveus.funding.dto.request.ReviewCreateReq;
import com.giveus.funding.dto.response.FundingDetailRes;
import com.giveus.funding.dto.response.FundingListRes;
import com.giveus.funding.dto.response.FundingParticipantsRes;
import com.giveus.funding.service.FundingService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@Tag(name = "사용자 펀딩 API", description = "User")
@RestController
@RequestMapping("/api/v1/funding")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FundingController {

    private final FundingService fundingService;

    @SwaggerApiSuccess(summary = "펀딩 전체 조회", implementation = FundingListRes.class)
    @GetMapping
    public ResponseEntity<CommonResponseBody<List<FundingListRes>>> getFundingList() {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.getFundingList()));
    }

    @SwaggerApiSuccess(summary = "펀딩 상세 조회", implementation = FundingDetailRes.class)
    @GetMapping("/{fundingNo}")
    public ResponseEntity<CommonResponseBody<FundingDetailRes>> getFunding(@PathVariable int fundingNo) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.getFunding(fundingNo)));
    }

    @SwaggerApiSuccess(summary = "펀딩명 검색", implementation = FundingListRes.class)
    @GetMapping("/search")
    public ResponseEntity<CommonResponseBody<List<FundingListRes>>> getFundingQuery(@RequestParam String query) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.getFundingSearchList(query)));
    }

    @SwaggerApiSuccess(summary = "펀딩 2차 등록", implementation = CreateSuccessDto.class)
    @PostMapping
    public ResponseEntity<CommonResponseBody<CreateSuccessDto>> createFunding(
            @Valid @RequestPart FundingCreateReq fundingCreateReq, @RequestPart(required = false) MultipartFile file) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.createFunding(fundingCreateReq, file)));
    }

    @SwaggerApiSuccess(summary = "후원 내역 조회", implementation = FundingParticipantsRes.class)
    @GetMapping("/{fundingNo}/participants")
    public ResponseEntity<CommonResponseBody<List<FundingParticipantsRes>>> getFundingParticipants(@PathVariable int fundingNo) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.getParticipants(fundingNo)));
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
