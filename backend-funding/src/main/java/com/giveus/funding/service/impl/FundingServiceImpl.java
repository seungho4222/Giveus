package com.giveus.funding.service.impl;

import com.giveus.funding.dto.request.FundingCreateReq;
import com.giveus.funding.dto.response.FundingDetailsRes;
import com.giveus.funding.entity.Funding;
import com.giveus.funding.repository.FundingRepository;
import com.giveus.funding.service.FundingService;
import com.giveus.funding.transfer.FundingTransfer;
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
}
