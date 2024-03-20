package com.giveus.funding.controller;

import com.giveus.funding.common.dto.CommonResponseBody;
import com.giveus.funding.dto.response.FundingListRes;
import com.giveus.funding.service.FundingService;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.OK;

@Tag(name = "사용자 펀딩 API", description = "User")
@RestController
@RequestMapping("/api/v1/funding")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FundingController {

    private final FundingService fundingService;

    @GetMapping
    public ResponseEntity<CommonResponseBody<List<FundingListRes>>> getFundingList() {
        return ResponseEntity
            .status(OK)
            .body(new CommonResponseBody<>(OK, fundingService.getFundingList()));
    }



}
