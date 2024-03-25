package com.giveus.admin.service.impl;

import com.giveus.admin.common.dto.CreateSuccessDto;
import com.giveus.admin.dto.request.FundingUsageCreateReq;
import com.giveus.admin.entity.Funding;
import com.giveus.admin.entity.UsageHistory;
import com.giveus.admin.repository.UsageHistoryRepository;
import com.giveus.admin.service.UsageHistoryService;
import com.giveus.admin.transfer.UsageHistoryTransfer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UsageHistoryServiceImpl implements UsageHistoryService {
    private final UsageHistoryRepository usageHistoryRepository;

    @Override
    @Transactional
    public CreateSuccessDto createFundingUsage(Funding funding, FundingUsageCreateReq req) {
        UsageHistory usageHistory = UsageHistoryTransfer.dtoToEntity(funding, req);
        UsageHistory savedUsageHistory = usageHistoryRepository.save(usageHistory);
        return new CreateSuccessDto(savedUsageHistory.getUsageHistoryNo());
    }
}
