package com.giveus.admin.transfer;

import com.giveus.admin.dto.request.FundingCreateReq;
import com.giveus.admin.dto.response.FundingDetailsRes;
import com.giveus.admin.entity.Funding;
import com.giveus.admin.entity.FundingStatusHistory;
import com.giveus.admin.enums.FundingStatus;

public class FundingStatusHistoryTransfer {
    public static FundingStatusHistory dtoToEntity(Funding funding) {
        FundingStatusHistory fundingStatusHistory = new FundingStatusHistory();
        fundingStatusHistory.setFunding(funding);
        fundingStatusHistory.setStatus(FundingStatus.ONGOING.getName());
        return  fundingStatusHistory;
    }
}
