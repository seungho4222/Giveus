package com.giveus.funding.controller;

import com.giveus.funding.common.dto.CommonResponseBody;
import com.giveus.funding.common.dto.CreateSuccessDto;
import com.giveus.funding.common.swagger.SwaggerApiSuccess;
import com.giveus.funding.dto.request.FundingCreateReq;
import com.giveus.funding.dto.response.FundingDetailRes;
import com.giveus.funding.dto.response.FundingListRes;
import com.giveus.funding.service.FundingService;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    @SwaggerApiSuccess(summary = "펀딩 2차 등록", implementation = CreateSuccessDto.class)
    @PostMapping
    public ResponseEntity<CommonResponseBody<CreateSuccessDto>> createFunding(
            @Valid @RequestPart FundingCreateReq fundingCreateReq, @RequestPart(required = false) MultipartFile file) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.createFunding(fundingCreateReq, file)));
    }


}
