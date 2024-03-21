package com.giveus.funding.repository;

import com.giveus.funding.entity.Funding;
import com.giveus.funding.entity.FundingDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FundingDetailRepository extends JpaRepository<FundingDetail, Integer> {

    Optional<FundingDetail> findFundingDetailByFundingNo(int fundingNo);

}
