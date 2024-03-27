package com.giveus.funding.repository.impl;

import com.giveus.funding.dto.response.FundingUsageListRes;
import com.giveus.funding.entity.QFunding;
import com.giveus.funding.entity.QUsageHistory;
import com.giveus.funding.entity.UsageHistory;
import com.giveus.funding.repository.UsageHistoryRepositoryCustom;
import com.querydsl.core.types.Projections;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

public class UsageHistoryRepositoryImpl extends QuerydslRepositorySupport implements UsageHistoryRepositoryCustom {

    private static final QFunding qFunding = QFunding.funding;
    private static final QUsageHistory qUsageHistory = QUsageHistory.usageHistory;

    public UsageHistoryRepositoryImpl() {
        super(UsageHistory.class);
    }


    @Override
    public List<FundingUsageListRes> getUsageList(int fundingNo) {
        return from(qUsageHistory)
                .select(Projections.fields(FundingUsageListRes.class,
                        qUsageHistory.usageHistoryNo, qUsageHistory.category,
                        qUsageHistory.content, qUsageHistory.count,
                        qUsageHistory.amount))
                .orderBy(qUsageHistory.usageHistoryNo.desc())
                .fetch();
    }
}
