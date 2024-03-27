package com.giveus.funding.controller;

import com.giveus.funding.common.dto.CommonResponseBody;
import com.giveus.funding.common.dto.CreateSuccessDto;
import com.giveus.funding.common.swagger.SwaggerApiSuccess;
import com.giveus.funding.dto.request.FundingCreateReq;
import com.giveus.funding.dto.response.*;
import com.giveus.funding.service.FundingService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@Tag(name = "사용자 펀딩 API")
@RestController
@RequestMapping("/api/v1/funding")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FundingController {

    private final FundingService fundingService;

    @SwaggerApiSuccess(summary = "펀딩 전체 목록 조회", implementation = FundingListRes.class)
    @GetMapping
    public ResponseEntity<CommonResponseBody<List<FundingListRes>>> getFundingList() {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.getFundingList()));
    }

    @SwaggerApiSuccess(summary = "종료일이 얼마 남지 않은 펀딩 전체 목록 조회", implementation = FundingListRes.class)
    @GetMapping("soon-over")
    public ResponseEntity<CommonResponseBody<List<FundingListRes>>> getRecentEndingFundingList(@RequestParam Integer limit) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.getFundingListSortByEndDate(limit)));
    }

    @SwaggerApiSuccess(summary = "펀딩 상세(소개) 조회", implementation = FundingDetailRes.class)
    @GetMapping("/{fundingNo}")
    public ResponseEntity<CommonResponseBody<FundingDetailRes>> getFunding(@PathVariable int fundingNo) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.getFunding(fundingNo)));
    }

    @SwaggerApiSuccess(summary = "누적 기부 금액 조회", implementation = DonationAmountRes.class)
    @GetMapping("/total-amount")
    public ResponseEntity<CommonResponseBody<DonationAmountRes>> getDonationAmount() {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.getDonationAmount()));
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

    @SwaggerApiSuccess(summary = "최근 후원 참여자 내역 조회", implementation = FundingParticipantListRes.class)
    @GetMapping("/participants")
    public ResponseEntity<CommonResponseBody<List<FundingParticipantListRes>>> getRecentFundingParticipants(@RequestParam int limit) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.getParticipants(limit)));
    }

    @SwaggerApiSuccess(summary = "펀딩 후원 참여자 내역 조회", implementation = FundingParticipantListRes.class)
    @GetMapping("/{fundingNo}/participants")
    public ResponseEntity<CommonResponseBody<List<FundingParticipantListRes>>> getFundingParticipants(@PathVariable int fundingNo) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.getParticipantsByFunding(fundingNo)));
    }

    @SwaggerApiSuccess(summary = "펀딩 기금 사용 내역 조회", implementation = FundingUsageListRes.class)
    @GetMapping("/{fundingNo}/usage")
    public ResponseEntity<CommonResponseBody<List<FundingUsageListRes>>> getFundingUsage(@PathVariable int fundingNo) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.getUsageHistory(fundingNo)));
    }


}
