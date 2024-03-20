package com.giveus.admin.repository.impl;

import com.giveus.admin.dto.response.FundingListRes;
import com.giveus.admin.entity.Funding;
import com.giveus.admin.entity.QFunding;
import com.giveus.admin.entity.QFundingDetail;
import com.giveus.admin.entity.QFundingStatusHistory;
import com.giveus.admin.repository.FundingRepositoryCustom;
import com.querydsl.core.types.Expression;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;

import java.util.List;

import com.querydsl.core.types.dsl.BooleanExpression;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

/**
 * @author 이하늬
 * @since 1.0
 */
public class FundingRepositoryImpl extends QuerydslRepositorySupport
        implements FundingRepositoryCustom {

    private static final QFunding qFunding = QFunding.funding;
    private static final QFundingDetail qFundingDetail = QFundingDetail.fundingDetail;

    private static final QFundingStatusHistory qFundingStatusHistory = QFundingStatusHistory.fundingStatusHistory;

    public FundingRepositoryImpl() {
        super(Funding.class);
    }

    @Override
    public List<FundingListRes> getFundingList() {
        QFundingStatusHistory qFundingStatusHistory2 = QFundingStatusHistory.fundingStatusHistory;

        return from(qFundingDetail)
                .rightJoin(qFundingDetail.funding, qFunding)
                .select(Projections.constructor(FundingListRes.class, qFunding.fundingNo,
                        qFunding.issueNumber, qFunding.registrationNumber, qFunding.patientName,
                        ExpressionUtils.as(from(qFundingStatusHistory)
                                .select(qFundingStatusHistory.status)
                                .where(qFundingStatusHistory.fundingStatusHistoryNo.eq(
                                        from(qFundingStatusHistory2)
                                                .select(qFundingStatusHistory2.fundingStatusHistoryNo.max())
                                                .where(qFundingStatusHistory2.funding.eq(qFunding)))
                                ),"status")
                        , qFunding.title, ExpressionUtils.isNull(qFundingDetail.thumbnailUrl)
                ))
                .fetch();
    }

    private Expression<?> getFundingProcess() {
        return from(qFunding)
                .join(qFundingDetail);
    }
}
