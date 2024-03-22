package com.giveus.admin.service;

import com.giveus.admin.dto.request.FundingCreateReq;
import com.giveus.admin.dto.response.FundingDetailsRes;
import com.giveus.admin.dto.response.FundingListRes;
import java.util.List;

public interface FundingService {
    FundingDetailsRes createFunding(FundingCreateReq fundingCreateReq);

    List<FundingListRes> getFundingList(int adminNo);
}
