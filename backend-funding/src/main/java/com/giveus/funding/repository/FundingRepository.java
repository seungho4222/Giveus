package com.giveus.funding.repository;

import com.giveus.funding.dto.response.FundingUsageListRes;
import com.giveus.funding.entity.Funding;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FundingRepository extends JpaRepository<Funding, Integer>, FundingRepositoryCustom {
    Optional<Funding> findFundingByFundingNo(int fundingNo);

    Optional<Funding> findFundingByRegId(String regId);


}
