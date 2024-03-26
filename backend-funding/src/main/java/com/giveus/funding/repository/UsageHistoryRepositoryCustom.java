package com.giveus.funding.repository;

import com.giveus.funding.dto.response.FundingUsageListRes;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface UsageHistoryRepositoryCustom {
    List<FundingUsageListRes> getUsageList(int fundingNo);

}
