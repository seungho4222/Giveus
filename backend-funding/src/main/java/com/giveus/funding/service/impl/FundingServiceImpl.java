package com.giveus.funding.service.impl;

import com.giveus.funding.common.dto.CreateSuccessDto;
import com.giveus.funding.dto.request.FundingCreateReq;
import com.giveus.funding.dto.response.FundingDetailRes;
import com.giveus.funding.dto.response.FundingListRes;
import com.giveus.funding.entity.Funding;
import com.giveus.funding.entity.FundingDetail;
import com.giveus.funding.exception.AlreadyExistFundingException;
import com.giveus.funding.exception.FundingNotFoundException;
import com.giveus.funding.repository.FundingDetailRepository;
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
    private final FundingDetailRepository fundingDetailRepository;
//private final FileService fileService;

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
        return fundingRepository.findFundingByFundingNo(fundingNo)
                .orElseThrow(FundingNotFoundException::new);
    }

    /**
     * @inheritDoc
     */
    @Override
    @Transactional
    public CreateSuccessDto createFunding(FundingCreateReq fundingCreateReq, MultipartFile file) {

        // 펀딩마다 고유하게 갖고있는 regId로 펀딩 가져오기
        Funding funding = getFunding(fundingCreateReq.getRegId());

        // 해당 펀딩에 대해 이미 등록되어있는 펀딩인지 확인
        // 이미 등록되어있는 펀딩이라면 409 예외 발생
        if (isExistFundingDetail(funding.getFundingNo())) {
            throw new AlreadyExistFundingException();
        }

        // 펀딩 2차 등록
        FundingDetail fundingDetail = new FundingDetail();
        fundingDetail.setFundingNo(funding.getFundingNo());
        fundingDetail.setFunding(funding);
        fundingDetail.setContent(fundingCreateReq.getContent());
        fundingDetailRepository.save(fundingDetail);

        // TODO 파일 업로드 로직
        // String url = fileService.upload(file);
//        fundingDetail.setThumbnailUrl(url);

        return new CreateSuccessDto(funding.getFundingNo());
    }

    /**
     * 펀딩 추가 정보의 등록 여부를 확인하는 메서드입니다.
     *
     * @param fundingNo 조회할 펀딩 고유 번호
     * @return 이미 등록되어 있으면 true 반환, 등록되어 있지 않으면 false 반환
     */
    private boolean isExistFundingDetail(int fundingNo) {
        Optional<FundingDetail> fundingDetail = fundingDetailRepository.findFundingDetailByFundingNo(fundingNo);
        return fundingDetail.isPresent();
    }

    /**
     * 펀딩 추가정보에 필요한 고유 ID로 해당되는 펀딩을 조회하는 메서드입니다.
     *
     * @param regId 펀딩 추가정보 등록 고유 ID
     * @return 해당되는 펀딩 엔터티
     */
    private Funding getFunding(String regId) {
        return fundingRepository.findFundingByRegId(regId)
                .orElseThrow(FundingNotFoundException::new);
    }
}
