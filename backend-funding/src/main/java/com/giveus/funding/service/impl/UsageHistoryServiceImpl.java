package com.giveus.funding.service.impl;

import com.giveus.funding.dto.response.FundingUsageListRes;
import com.giveus.funding.repository.UsageHistoryRepository;
import com.giveus.funding.service.UsageHistoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UsageHistoryServiceImpl implements UsageHistoryService {
    private final UsageHistoryRepository usageHistoryRepository;
    @Override
    public List<FundingUsageListRes> getUsageList(int fundingNo) {
        return usageHistoryRepository.getUsageList(fundingNo);
    }
}
