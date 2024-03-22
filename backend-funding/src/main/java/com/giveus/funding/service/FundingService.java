package com.giveus.funding.service;

import com.giveus.funding.common.dto.CreateSuccessDto;
import com.giveus.funding.dto.request.FundingCreateReq;
import com.giveus.funding.dto.response.FundingDetailRes;
import com.giveus.funding.dto.response.FundingListRes;
import com.giveus.funding.dto.response.FundingParticipantsRes;
import com.giveus.funding.entity.Funding;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FundingService {
    /**
     * 펀딩 목록을 조회하는 메서드입니다.
     *
     * @return 조회한 펀딩 목록
     */
    List<FundingListRes> getFundingList();

    /**
     * 펀딩 번호로 펀딩 상세 조회하는 메서드입니다.
     *
     * @param fundingNo 조회할 펀딩 고유 번호
     * @return 조회한 펀딩 상세 정보
     */
    FundingDetailRes getFunding(int fundingNo);

    /**
     * 펀딩 번호로 펀딩 엔터티를 조회하는 메서드입니다.
     *
     * @param fundingNo 조회할 펀딩 고유 번호
     * @return 조회한 펀딩 엔터티
     */
    Funding getFundingEntity(int fundingNo);

    /**
     * 펀딩 2차 등록을 하는 메서드입니다.
     *
     * @param fundingCreateReq 등록할 펀딩 정보
     * @param file             펀딩 썸네일 파일
     * @return 등록한 펀딩의 고유 번호
     */
    CreateSuccessDto createFunding(FundingCreateReq fundingCreateReq, MultipartFile file);

    /**
     * 펀딩 참여자 내역을 조회하는 메서드입니다.
     *
     * @param fundingNo 조회할 펀딩 고유 번호
     * @return 펀딩 참여자 목록
     */
    List<FundingParticipantsRes> getParticipants(int fundingNo);
}
