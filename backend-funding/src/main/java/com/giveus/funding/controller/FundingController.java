package com.giveus.funding.controller;

import com.giveus.funding.common.dto.CommonResponseBody;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.HttpStatus.OK;

@RestController
public class FundingController {
    @GetMapping
    public ResponseEntity<CommonResponseBody<String>> getFundingList() {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, "TEST!!!"));
    }

}
