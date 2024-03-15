package com.giveus.funding.service;

import com.giveus.funding.dto.request.FundingCreateReq;
import com.giveus.funding.dto.response.FundingDetailsRes;

public interface FundingService {
    FundingDetailsRes createFunding(FundingCreateReq fundingCreateReq);
}
