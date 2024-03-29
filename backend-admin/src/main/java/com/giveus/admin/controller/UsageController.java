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
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@Tag(name = "관리자 펀딩 API", description = "Admin")
@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsageController {

    private final UsageHistoryService usageService;

    private final AdminService adminService;

    @SwaggerApiSuccess(summary = "펀딩 사용 내역 등록", implementation = FundingDetailsRes.class)
    @PostMapping("/usage")
    public ResponseEntity<CommonResponseBody<CreateSuccessDto>> createFundingUsage(
            @RequestBody FundingUsageCreateReq req) {
        return ResponseEntity
                .status(CREATED)
                .body(new CommonResponseBody<>(CREATED, usageService.createFundingUsage(req)));
    }


}
