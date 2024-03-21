package com.giveus.admin.service.impl;

import com.giveus.admin.entity.Funding;
import com.giveus.admin.entity.FundingStatusHistory;
import com.giveus.admin.repository.FundingStatusHistoryRepository;
import com.giveus.admin.service.FundingStatusHistoryService;
import com.giveus.admin.transfer.FundingStatusHistoryTransfer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FundingStatusHistoryServiceImpl implements FundingStatusHistoryService {
    private final FundingStatusHistoryRepository fundingStatusHistoryRepository;

    @Override
    public FundingStatusHistory createHistory(Funding funding) {
        FundingStatusHistory fundingStatusHistory = FundingStatusHistoryTransfer.dtoToEntityCreated(funding);
        return fundingStatusHistoryRepository.save(fundingStatusHistory);
    }
}
