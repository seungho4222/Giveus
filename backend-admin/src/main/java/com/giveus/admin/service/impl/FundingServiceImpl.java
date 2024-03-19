package com.giveus.admin.service.impl;

import com.giveus.admin.dto.request.FundingCreateReq;
import com.giveus.admin.dto.response.FundingDetailsRes;
import com.giveus.admin.dto.response.FundingListRes;
import com.giveus.admin.entity.Funding;
import com.giveus.admin.repository.FundingRepository;
import com.giveus.admin.service.FundingService;
import com.giveus.admin.transfer.FundingTransfer;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FundingServiceImpl implements FundingService {
    private final FundingRepository fundingRepository;

    @Override
    public FundingDetailsRes createFunding(FundingCreateReq fundingCreateReq) {
        Funding funding = FundingTransfer.dtoToEntity(fundingCreateReq);
        Funding savedFunding = fundingRepository.save(funding);
        return FundingTransfer.entityToDto(savedFunding);
    }

    @Override
    public List<FundingListRes> getFundingList() {
        return fundingRepository.getFundingList();
    }
}
