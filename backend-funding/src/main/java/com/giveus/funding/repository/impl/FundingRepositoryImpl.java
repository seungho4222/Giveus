package com.giveus.funding.repository.impl;

import com.giveus.funding.dto.response.FundingListRes;
import com.giveus.funding.entity.*;
import com.giveus.funding.repository.FundingRepositoryCustom;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;

import java.util.List;

import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAUtil;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

/**
 * @author 이하늬
 * @since 1.0
 */
public class FundingRepositoryImpl extends QuerydslRepositorySupport
        implements FundingRepositoryCustom {

    private static final QFunding qFunding = QFunding.funding;
    private static final QFundingStatusHistory qFundingStatusHistory = QFundingStatusHistory.fundingStatusHistory;

    private static final QMemberFunding qMemberFunding = QMemberFunding.memberFunding;

    public FundingRepositoryImpl() {
        super(Funding.class);
    }

    @Override
    public List<FundingListRes> getFundingList() {
        QFundingStatusHistory qFundingStatusHistory2 = QFundingStatusHistory.fundingStatusHistory;
        return from(qFunding)
                .select(Projections.fields(FundingListRes.class, qFunding.fundingNo,
                        qFunding.title,
                        ExpressionUtils.as(from(qFundingStatusHistory)
                                .select(qFundingStatusHistory.status)
                                .where(qFundingStatusHistory.fundingStatusHistoryNo.eq(
                                        from(qFundingStatusHistory2)
                                                .select(qFundingStatusHistory2.fundingStatusHistoryNo.max())
                                                .where(qFundingStatusHistory2.funding.eq(qFunding)))
                                ),"status")
                        , qFunding.targetAmount,
                        ExpressionUtils.as(from(qMemberFunding)
                                .select(qMemberFunding.amount.sum())
                                .where(qMemberFunding.funding.eq(qFunding)),"totalAmount")
                        , qFunding.startDate, qFunding.endDate, qFunding.createdAt, qFunding.birth
                ))
                .fetch();
    }
}
