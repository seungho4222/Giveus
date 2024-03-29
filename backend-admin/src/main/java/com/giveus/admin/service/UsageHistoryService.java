package com.giveus.admin.service;

import com.giveus.admin.common.dto.CreateSuccessDto;
import com.giveus.admin.dto.request.FundingUsageCreateReq;

public interface UsageHistoryService {
    CreateSuccessDto createFundingUsage(FundingUsageCreateReq req);
}
