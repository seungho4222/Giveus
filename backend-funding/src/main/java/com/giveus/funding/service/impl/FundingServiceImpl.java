package com.giveus.funding.service.impl;

import com.giveus.funding.dto.response.FundingListRes;
import com.giveus.funding.repository.FundingRepository;
import com.giveus.funding.service.FundingService;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FundingServiceImpl implements FundingService {
    private final FundingRepository fundingRepository;


    @Override
    public List<FundingListRes> getFundingList() {
        return fundingRepository.getFundingList();
    }
}
