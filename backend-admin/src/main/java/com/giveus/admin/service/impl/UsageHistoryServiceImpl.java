package com.giveus.admin.service.impl;

import com.giveus.admin.common.dto.CreateSuccessDto;
import com.giveus.admin.dto.request.FundingUsageCreateReq;
import com.giveus.admin.entity.Funding;
import com.giveus.admin.entity.UsageHistory;
import com.giveus.admin.repository.UsageHistoryRepository;
import com.giveus.admin.service.MessageService;
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
    private final MessageService messageService;

    @Override
    @Transactional
    public CreateSuccessDto createFundingUsage(Funding funding, FundingUsageCreateReq req) {

        // 펀딩 사용 내역 등록
        UsageHistory usageHistory = UsageHistoryTransfer.dtoToEntity(funding, req);
        UsageHistory savedUsageHistory = usageHistoryRepository.save(usageHistory);

        // 문자 전송
        messageService.sendMessage(funding.getPhone(), funding.getRegId());

        return new CreateSuccessDto(savedUsageHistory.getUsageHistoryNo());
    }
}
