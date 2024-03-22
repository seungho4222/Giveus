package com.giveus.funding.repository;

import com.giveus.funding.dto.response.FundingDetailRes;
import com.giveus.funding.dto.response.FundingListRes;
import com.giveus.funding.dto.response.FundingParticipantsRes;
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

    Optional<FundingDetailRes> getFunding(int fundingNo);

    List<FundingParticipantsRes> getParticipantList(int fundingNo);
}
