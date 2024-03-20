package com.giveus.admin.service;

import com.giveus.admin.dto.response.FundingDetailsRes;
import com.giveus.admin.entity.Funding;
import com.giveus.admin.entity.FundingStatusHistory;

public interface FundingStatusHistoryService {
    FundingStatusHistory createHistory(Funding funding);

}
