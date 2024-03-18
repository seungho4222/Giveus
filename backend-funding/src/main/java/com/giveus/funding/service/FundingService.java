package com.giveus.funding.service;

import com.giveus.funding.dto.request.FundingCreateReq;
import com.giveus.funding.dto.response.FundingDetailsRes;
import com.giveus.funding.dto.response.FundingListRes;
import java.util.List;

public interface FundingService {
    FundingDetailsRes createFunding(FundingCreateReq fundingCreateReq);

    List<FundingListRes> getFundingList();
}
