package com.giveus.admin.transfer;

import com.giveus.admin.dto.request.FundingCreateReq;
import com.giveus.admin.dto.request.FundingUsageCreateReq;
import com.giveus.admin.dto.response.FundingDetailsRes;
import com.giveus.admin.entity.Funding;
import com.giveus.admin.entity.UsageHistory;

public class UsageHistoryTransfer {
    public static UsageHistory dtoToEntity(Funding funding, FundingUsageCreateReq req) {
        return UsageHistory.builder()
                .funding(funding)
                .count(req.getCount())
                .amount(req.getAmount())
                .content(req.getContent())
                .category(req.getCategory())
                .build();

    }

}
