package com.giveus.funding.repository;

import com.giveus.funding.dto.response.FundingUsageListRes;
import com.giveus.funding.entity.UsageHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsageHistoryRepository extends JpaRepository<UsageHistory, Integer>, UsageHistoryRepositoryCustom {
    List<FundingUsageListRes> findByFunding_FundingNoOrderByUsageHistoryNoDesc(int fundingNo);



}
