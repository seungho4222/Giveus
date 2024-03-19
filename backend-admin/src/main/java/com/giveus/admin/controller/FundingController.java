package com.giveus.admin.controller;

import com.giveus.admin.common.dto.CommonResponseBody;
import com.giveus.admin.dto.request.FundingCreateReq;
import com.giveus.admin.dto.response.FundingDetailsRes;
import com.giveus.admin.dto.response.FundingListRes;
import com.giveus.admin.service.FundingService;
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

    @GetMapping
    public ResponseEntity<CommonResponseBody<List<FundingListRes>>> getFundingList() {
        return ResponseEntity
            .status(OK)
            .body(new CommonResponseBody<>(OK, fundingService.getFundingList()));
    }

    @PostMapping
    public ResponseEntity<CommonResponseBody<FundingDetailsRes>> createFunding(@RequestBody FundingCreateReq req) {
        return ResponseEntity
                .status(CREATED)
                .body(new CommonResponseBody<>(CREATED, fundingService.createFunding(req)));
    }

}
