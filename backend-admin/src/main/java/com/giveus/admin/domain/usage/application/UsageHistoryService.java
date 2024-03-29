package com.giveus.admin.domain.usage.application;

import com.giveus.admin.global.common.response.CreateSuccessDto;
import com.giveus.admin.domain.usage.dto.FundingUsageCreateReq;

public interface UsageHistoryService {
    CreateSuccessDto createFundingUsage(FundingUsageCreateReq req);
}
