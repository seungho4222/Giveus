package com.giveus.funding.service;

import com.giveus.funding.dto.response.FundingUsageListRes;

import java.util.List;

public interface UsageHistoryService {
    /**
     * 펀딩 사용 내역을 조회하는 메서드입니다.
     * 
     * @param fundingNo 조회할 펀딩 고유 번호
     * @return 펀딩 사용 내역 목록
     */
    List<FundingUsageListRes> getUsageList(int fundingNo);

}
