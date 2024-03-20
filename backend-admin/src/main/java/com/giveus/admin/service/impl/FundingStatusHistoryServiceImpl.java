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
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FundingStatusHistoryServiceImpl implements FundingStatusHistoryService {
    private final FundingStatusHistoryRepository fundingStatusHistoryRepository;

    @Override
    public FundingStatusHistory createHistory(Funding funding) {
        FundingStatusHistory fundingStatusHistory = FundingStatusHistoryTransfer.dtoToEntity(funding);
        return fundingStatusHistoryRepository.save(fundingStatusHistory);
    }
}
