package com.giveus.admin.controller;

import com.giveus.admin.common.dto.CommonResponseBody;
import com.giveus.admin.common.dto.CreateSuccessDto;
import com.giveus.admin.common.swagger.SwaggerApiSuccess;
import com.giveus.admin.dto.request.AdminJoinPostReq;
import com.giveus.admin.dto.request.FundingCreateReq;
import com.giveus.admin.dto.request.FundingUsageCreateReq;
import com.giveus.admin.dto.response.AdminInfoRes;
import com.giveus.admin.dto.response.FundingDetailsRes;
import com.giveus.admin.dto.response.FundingListRes;
import com.giveus.admin.service.AdminService;
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
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FundingController {

    private final FundingService fundingService;

    private final AdminService adminService;

    @SwaggerApiSuccess(summary = "펀딩 전체 목록 조회", implementation = FundingListRes.class)
    @GetMapping("/{adminNo}/funding")
    public ResponseEntity<CommonResponseBody<List<FundingListRes>>> getFundingList(@PathVariable int adminNo) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.getFundingList(adminNo)));
    }

    @SwaggerApiSuccess(summary = "펀딩 상세 조회", implementation = FundingDetailsRes.class)
    @GetMapping("funding/{fundingNo}")
    public ResponseEntity<CommonResponseBody<FundingDetailsRes>> getFunding(@PathVariable int fundingNo) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.getFunding(fundingNo)));
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

    @SwaggerApiSuccess(summary = "회원가입 추가 정보 입력", implementation = AdminInfoRes.class)
    @PutMapping("/join")
    public ResponseEntity<CommonResponseBody<AdminInfoRes>> updateMember(@RequestBody AdminJoinPostReq adminJoinPostReq) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, adminService.updateAdmin(adminJoinPostReq)));
    }

}
