package com.giveus.funding.service.impl;

import com.giveus.funding.common.dto.CreateSuccessDto;
import com.giveus.funding.dto.request.FundingCreateReq;
import com.giveus.funding.dto.response.FundingDetailRes;
import com.giveus.funding.dto.response.FundingListRes;
import com.giveus.funding.entity.Funding;
import com.giveus.funding.entity.FundingDetail;
import com.giveus.funding.exception.FundingNotFoundException;
import com.giveus.funding.repository.FundingRepository;
import com.giveus.funding.service.FundingService;

import java.util.List;
import java.util.Optional;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FundingServiceImpl implements FundingService {
    private final FundingRepository fundingRepository;

    /**
     * @inheritDoc
     */
    @Override
    public List<FundingListRes> getFundingList() {
        return fundingRepository.getFundingList();
    }

    /**
     * @inheritDoc
     */
    @Override
    public FundingDetailRes getFunding(int fundingNo) {
        return fundingRepository.getFunding(fundingNo)
                .orElseThrow(FundingNotFoundException::new);
    }

    /**
     * @inheritDoc
     */
    @Override
    public Funding getFundingEntity(int fundingNo) {
        return fundingRepository.getFundingByFundingNo(fundingNo)
                .orElseThrow(FundingNotFoundException::new);
    }


    /**
     * @inheritDoc
     */
    @Override
    @Transactional
    public CreateSuccessDto createFunding(FundingCreateReq fundingCreateReq, MultipartFile file) {
        FundingDetail fundingDetail = new FundingDetail();
        // TODO 펀딩 번호 얻어오는 로직
        Funding funding = getFunding(fundingCreateReq.getRegistrationUID());
        fundingDetail.setFundingNo(funding.getFundingNo());
        fundingDetail.setFunding(funding);
        fundingDetail.setContent(fundingCreateReq.getContent());
        // TODO 파일 업로드 로직
        fundingDetail.setThumbnailUrl(null);

        return new CreateSuccessDto(funding.getFundingNo());
    }

    private Funding getFunding(String registrationUID) {
        return new Funding();
    }
}
