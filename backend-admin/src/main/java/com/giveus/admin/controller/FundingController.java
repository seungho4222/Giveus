package com.giveus.admin.controller;

import com.giveus.admin.common.dto.CommonResponseBody;
import com.giveus.admin.common.dto.CreateSuccessDto;
import com.giveus.admin.common.swagger.SwaggerApiSuccess;
import com.giveus.admin.dto.request.FundingCreateReq;
import com.giveus.admin.dto.request.FundingUsageCreateReq;
import com.giveus.admin.dto.response.FundingDetailsRes;
import com.giveus.admin.dto.response.FundingListRes;
import com.giveus.admin.service.FundingService;
import com.giveus.admin.service.UsageHistoryService;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@Tag(name = "관리자 펀딩 API", description = "Admin")
@RestController
@RequestMapping("/api/v1/admin/funding")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FundingController {

    private final FundingService fundingService;

    @SwaggerApiSuccess(summary = "펀딩 전체 조회", implementation = FundingListRes.class)
    @GetMapping
    public ResponseEntity<CommonResponseBody<List<FundingListRes>>> getFundingList(@RequestParam int adminNo) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.getFundingList(adminNo)));
    }

    @SwaggerApiSuccess(summary = "펀딩 1차 등록", implementation = FundingDetailsRes.class)
    @PostMapping
    public ResponseEntity<CommonResponseBody<CreateSuccessDto>> createFunding(@RequestBody FundingCreateReq req) {
        return ResponseEntity
                .status(CREATED)
                .body(new CommonResponseBody<>(CREATED, fundingService.createFunding(req)));
    }

    @SwaggerApiSuccess(summary = "펀딩 사용 내역 등록", implementation = FundingDetailsRes.class)
    @PostMapping("/usage")
    public ResponseEntity<CommonResponseBody<CreateSuccessDto>> createFundingUsage(@RequestBody FundingUsageCreateReq req) {
        return ResponseEntity
                .status(CREATED)
                .body(new CommonResponseBody<>(CREATED, fundingService.createFundingUsage(req)));
    }

}
