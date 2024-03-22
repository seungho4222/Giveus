package com.giveus.funding.repository.impl;

import com.giveus.funding.dto.response.FundingDetailRes;
import com.giveus.funding.dto.response.FundingListRes;
import com.giveus.funding.dto.response.FundingParticipantsRes;
import com.giveus.funding.entity.*;
import com.giveus.funding.repository.FundingRepositoryCustom;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;
import java.util.Optional;

/**
 * @author 이하늬
 * @since 1.0
 */
public class FundingRepositoryImpl extends QuerydslRepositorySupport implements FundingRepositoryCustom {

    private static final QFunding qFunding = QFunding.funding;
    private static final QFundingDetail qFundingDetail = QFundingDetail.fundingDetail;
    private static final QFundingStatusHistory qFundingStatusHistory = QFundingStatusHistory.fundingStatusHistory;
    private static final QMember qMember = QMember.member;
    private static final QMemberFunding qMemberFunding = QMemberFunding.memberFunding;

    public FundingRepositoryImpl() {
        super(Funding.class);
    }

    @Override
    public List<FundingListRes> getFundingList() {
        QFundingStatusHistory qFundingStatusHistory2 = QFundingStatusHistory.fundingStatusHistory;
        return from(qFundingDetail)
                .leftJoin(qFundingDetail.funding, qFunding)
                .select(Projections.fields(FundingListRes.class,
                        qFundingDetail.thumbnailUrl, qFunding.fundingNo, qFunding.title,
                        ExpressionUtils.as(from(qFundingStatusHistory)
                                .select(qFundingStatusHistory.status)
                                .where(qFundingStatusHistory.fundingStatusHistoryNo
                                        .eq(from(qFundingStatusHistory2)
                                                .select(qFundingStatusHistory2.fundingStatusHistoryNo.max())
                                                .where(qFundingStatusHistory2.funding.eq(qFunding)))), "status"),
                        qFunding.targetAmount, ExpressionUtils.as(from(qMemberFunding)
                                .select(qMemberFunding.amount.sum())
                                .where(qMemberFunding.funding.eq(qFunding)), "totalAmount")
                        , qFunding.startDate, qFunding.endDate, qFunding.createdAt, qFunding.birth))
                .fetch();
    }

    @Override
    public Optional<FundingDetailRes> getFunding(int fundingNo) {
        QFundingStatusHistory qFundingStatusHistory2 = QFundingStatusHistory.fundingStatusHistory;
        return Optional.ofNullable(from(qFundingDetail)
                .leftJoin(qFundingDetail.funding, qFunding)
                .select(Projections.fields(FundingDetailRes.class,
                        qFundingDetail.thumbnailUrl, qFunding.fundingNo, qFunding.title,
                        ExpressionUtils.as(from(qFundingStatusHistory)
                                .select(qFundingStatusHistory.status)
                                .where(qFundingStatusHistory.fundingStatusHistoryNo
                                        .eq(from(qFundingStatusHistory2)
                                                .select(qFundingStatusHistory2.fundingStatusHistoryNo.max())
                                                .where(qFundingStatusHistory2.funding.fundingNo.eq(fundingNo)))), "status")
                        , qFunding.targetAmount, ExpressionUtils.as(from(qMemberFunding)
                                .select(qMemberFunding.amount.sum())
                                .where(qMemberFunding.funding.fundingNo.eq(fundingNo)), "totalAmount")
                        , qFunding.startDate, qFunding.endDate, qFunding.createdAt, qFunding.birth, qFundingDetail.content))
                .where(qFundingDetail.funding.fundingNo.eq(fundingNo)).fetchOne());
    }

    @Override
    public List<FundingParticipantsRes> getParticipantList(int fundingNo) {
        QMemberFunding qMemberFunding2 = QMemberFunding.memberFunding;
        return from(qMemberFunding2)
                .innerJoin(qMemberFunding2.member, qMember)
                .on(qMemberFunding2.funding.fundingNo.eq(fundingNo))
                .select(Projections.fields(FundingParticipantsRes.class,
                        qMemberFunding2.isPublic
                                .when(true).then(qMember.name)
                                .when(false).then(qMember.nickname)
                                .otherwise("").as("name"),
                        qMemberFunding2.amount, qMemberFunding2.createdAt))
                .fetch();
    }
}
