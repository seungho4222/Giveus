package com.giveus.funding.controller;

import com.giveus.funding.common.dto.CommonResponseBody;
import com.giveus.funding.dto.request.FundingCreateReq;
import com.giveus.funding.dto.response.FundingDetailsRes;
import com.giveus.funding.service.FundingService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@Tag(name = "Admin API", description = "관리자")
@RestController
@RequestMapping("/api/v1/funding")
@RequiredArgsConstructor
@Slf4j
public class FundingController {

    private final FundingService fundingService;

    @GetMapping

    public ResponseEntity<CommonResponseBody<String>> getFundingList() {
        log.info("debug");
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, "TEST!!!"));
    }

    @PostMapping
    public ResponseEntity<CommonResponseBody<FundingDetailsRes>> createFunding(@RequestBody FundingCreateReq req) {
        return ResponseEntity
                .status(CREATED)
                .body(new CommonResponseBody<>(CREATED, fundingService.createFunding(req)));
    }

}
