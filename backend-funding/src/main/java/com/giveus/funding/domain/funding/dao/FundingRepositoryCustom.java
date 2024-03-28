package com.giveus.funding.domain.funding.dao;

import com.giveus.funding.domain.donation.dto.DonationAmountRes;
import com.giveus.funding.domain.donation.dto.DonationListRes;
import com.giveus.funding.domain.donation.dto.MemberDonationListRes;
import com.giveus.funding.domain.funding.dto.FundingDetailRes;
import com.giveus.funding.domain.funding.dto.FundingListRes;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;
import java.util.Optional;

/**
 * @author 이하늬
 * @since 1.0
 */
@NoRepositoryBean
public interface FundingRepositoryCustom {
    List<FundingListRes> getFundingList();
    List<MemberDonationListRes> getMemberFundingList(int memberNo);

    Optional<FundingDetailRes> getFunding(int fundingNo);

    List<DonationListRes> getParticipantListByFunding(int fundingNo);

    List<FundingListRes> getFundingByFundingTitle(String query);

    DonationAmountRes getDonationAmount();

    List<DonationListRes> getParticipantList(int limit);

    List<FundingListRes> getFundingListSortByEndDate(Integer limit);
}
