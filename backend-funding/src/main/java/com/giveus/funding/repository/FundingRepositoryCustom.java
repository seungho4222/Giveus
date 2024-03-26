package com.giveus.funding.repository;

import com.giveus.funding.dto.response.FundingDetailRes;
import com.giveus.funding.dto.response.FundingListRes;
import com.giveus.funding.dto.response.FundingParticipantListRes;
import com.giveus.funding.dto.response.MyPageFundingListRes;
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
    List<MyPageFundingListRes> getFundingList(int memberNo);

    Optional<FundingDetailRes> getFunding(int fundingNo);

    List<FundingParticipantListRes> getParticipantList(int fundingNo);

    List<FundingListRes> getFundingByFundingTitle(String query);

}
