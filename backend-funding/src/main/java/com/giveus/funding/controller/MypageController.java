package com.giveus.funding.controller;

import com.giveus.funding.common.dto.CommonResponseBody;
import com.giveus.funding.common.swagger.SwaggerApiSuccess;
import com.giveus.funding.dto.response.FundingListRes;
import com.giveus.funding.dto.response.MyPageFundingListRes;
import com.giveus.funding.service.FundingService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@Tag(name = "마이페이지 API")
@RestController
@RequestMapping("/api/v1/funding/mypage")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MypageController {

    private final FundingService fundingService;

    @SwaggerApiSuccess(summary = "회원 펀딩 참여 내역 조회", implementation = FundingListRes.class)
    @GetMapping("/{memberNo}")
    public ResponseEntity<CommonResponseBody<List<MyPageFundingListRes>>> getFundingListByMember(@PathVariable int memberNo) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, fundingService.getMemberFundingList(memberNo)));
    }

}
