package com.giveus.funding.service;

import com.giveus.funding.common.dto.CreateSuccessDto;
import com.giveus.funding.dto.request.FundingCreateReq;
import com.giveus.funding.dto.request.ReviewCreateReq;
import com.giveus.funding.dto.response.*;
import com.giveus.funding.entity.Funding;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FundingService {
    /**
     * 펀딩 목록을 조회하는 메서드입니다.
     *
     * @return 조회한 펀딩 목록
     */
    List<FundingListRes> getFundingList(String sort, Integer limit);

    /**
     * 회원 고유 번호로 기부에 참여한 펀딩 목록을 조회하는 메서드입니다.
     *
     * @param memberNo 조회할 회원 고유 번호
     * @return 조회한 펀딩 목록
     */
    List<MyPageFundingListRes> getMemberFundingList(int memberNo);


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
    List<FundingParticipantListRes> getParticipantsByFunding(int fundingNo);

    /**
     * 펀딩명으로 펀딩 검색 결과를 조회하는 메서드입니다.
     *
     * @param query 검색어 (검색할 펀딩명)
     * @return 검색 결과 (펀딩 목록)
     */
    List<FundingListRes> getFundingSearchList(String query);

    /**
     * 펀딩 후기를 등록하는 메서드입니다.
     *
     * @param reviewCreateReq 등록할 후기 정보
     * @param file 후기 사진
     * @return 등록한 후기의 고유 번호
     */
    CreateSuccessDto createReview(ReviewCreateReq reviewCreateReq, MultipartFile file);

    /**
     * 펀딩 기금 사용 내역을 조회하는 메서드입니다.
     *
     * @param fundingNo 조회할 펀딩 고유 번호
     * @return 펀딩 고융 번호 기준 기금 사용 내역
     */
    List<FundingUsageListRes> getUsageHistory(int fundingNo);

    /**
     * 누적 기부 금액을 조회하는 메서드입니다.
     * 
     * @return 누적 기부 금액
     */
    DonationAmountRes getDonationAmount();

    /**
     * 최근 후원에 참여한 참여자 전체 목록을 조회하는 메서드입니다.
     * 
     * @param limit 조회할 갯수
     * @return 조회한 참여자 전체 목록
     */
    List<FundingParticipantListRes> getParticipants(int limit);
}
