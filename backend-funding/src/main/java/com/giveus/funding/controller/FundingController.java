package com.giveus.funding.controller;

import com.giveus.funding.common.dto.CommonResponseBody;
import com.giveus.funding.common.dto.CreateSuccessDto;
import com.giveus.funding.dto.request.FundingCreateReq;
import com.giveus.funding.dto.response.FundingDetailsRes;
import com.giveus.funding.service.FundingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequiredArgsConstructor
public class FundingController {

    private final FundingService fundingService;
    @GetMapping
    public ResponseEntity<CommonResponseBody<String>> getFundingList() {
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
