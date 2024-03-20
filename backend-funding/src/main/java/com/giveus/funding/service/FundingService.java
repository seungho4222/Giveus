package com.giveus.funding.service;

import com.giveus.funding.dto.response.FundingListRes;
import java.util.List;

public interface FundingService {
    List<FundingListRes> getFundingList();
}
