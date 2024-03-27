package com.giveus.funding.repository;

import com.giveus.funding.dto.response.*;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;
import java.util.Optional;

/**
 * @author 이하늬
 * @since 1.0
 */
@NoRepositoryBean
public interface FundingRepositoryCustom {
    List<FundingListRes> getFundingList(String sort, Integer limit);
    List<MyPageFundingListRes> getMemberFundingList(int memberNo);

    Optional<FundingDetailRes> getFunding(int fundingNo);

    List<FundingParticipantListRes> getParticipantListByFunding(int fundingNo);

    List<FundingListRes> getFundingByFundingTitle(String query);

    DonationAmountRes getDonationAmount();

    List<FundingParticipantListRes> getParticipantList(int limit);
}
