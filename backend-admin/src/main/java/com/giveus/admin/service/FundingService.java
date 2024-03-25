package com.giveus.admin.service;

import com.giveus.admin.common.dto.CreateSuccessDto;
import com.giveus.admin.dto.request.FundingCreateReq;
import com.giveus.admin.dto.request.FundingUsageCreateReq;
import com.giveus.admin.dto.response.FundingListRes;
import com.giveus.admin.entity.Funding;

import java.util.List;

public interface FundingService {
    CreateSuccessDto createFunding(FundingCreateReq fundingCreateReq);

    List<FundingListRes> getFundingList(int adminNo);

    Funding findFundingEntity(int fundingNo);

    CreateSuccessDto createFundingUsage(FundingUsageCreateReq req);

}
