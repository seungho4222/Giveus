package com.giveus.admin.service.impl;

import com.giveus.admin.dto.request.FundingCreateReq;
import com.giveus.admin.dto.response.FundingDetailsRes;
import com.giveus.admin.dto.response.FundingListRes;
import com.giveus.admin.entity.Funding;
import com.giveus.admin.entity.FundingStatusHistory;
import com.giveus.admin.repository.FundingRepository;
import com.giveus.admin.repository.FundingStatusHistoryRepository;
import com.giveus.admin.service.FundingService;
import com.giveus.admin.service.FundingStatusHistoryService;
import com.giveus.admin.transfer.FundingStatusHistoryTransfer;
import com.giveus.admin.transfer.FundingTransfer;
import java.util.List;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly=true)
public class FundingServiceImpl implements FundingService {
    private final FundingRepository fundingRepository;
    private final FundingStatusHistoryService fundingStatusHistoryService;

    @Override
    @Transactional
    public FundingDetailsRes createFunding(FundingCreateReq fundingCreateReq) {
        Funding funding = FundingTransfer.dtoToEntity(fundingCreateReq);
        Funding savedFunding = fundingRepository.save(funding);
        fundingStatusHistoryService.createHistory(savedFunding);
        return FundingTransfer.entityToDto(savedFunding);
    }

    @Override
    public List<FundingListRes> getFundingList() {
        return fundingRepository.getFundingList();
    }
}
