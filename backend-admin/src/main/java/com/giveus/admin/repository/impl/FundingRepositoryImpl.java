package com.giveus.admin.repository.impl;

import com.giveus.admin.dto.response.FundingDetailsRes;
import com.giveus.admin.dto.response.FundingListRes;
import com.giveus.admin.entity.*;
import com.giveus.admin.repository.FundingRepositoryCustom;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;

import java.util.List;

import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

/**
 * @author 이하늬
 * @since 1.0
 */
public class FundingRepositoryImpl extends QuerydslRepositorySupport
        implements FundingRepositoryCustom {

    private static final QFunding qFunding = QFunding.funding;
    private static final QMemberFunding qMemberFunding = QMemberFunding.memberFunding;

    private static final QReview qReview = QReview.review;
    private static final QFundingDetail qFundingDetail = QFundingDetail.fundingDetail;

    private static final QUsageHistory qUsageHistory = QUsageHistory.usageHistory;
    private static final QFundingStatusHistory qFundingStatusHistory = QFundingStatusHistory.fundingStatusHistory;

    public FundingRepositoryImpl() {
        super(Funding.class);
    }

    @Override
    public List<FundingListRes> getFundingList(int adminNo) {
        QFundingStatusHistory qFundingStatusHistory2 = QFundingStatusHistory.fundingStatusHistory;

        return from(qFunding)
                .leftJoin(qFundingDetail).on(qFunding.eq(qFundingDetail.funding))
                .leftJoin(qReview).on(qFunding.eq(qReview.funding))
                .leftJoin(qUsageHistory).on(qFunding.eq(qUsageHistory.funding))
                .select(Projections.fields(FundingListRes.class, qFunding.fundingNo,
                        qFunding.registrationNumber, qFunding.patientName,
                        qFunding.birth, qFunding.diseaseName,
                        ExpressionUtils.as(from(qFundingStatusHistory)
                                .select(qFundingStatusHistory.status)
                                .where(qFundingStatusHistory.fundingStatusHistoryNo.eq(
                                        from( qFundingStatusHistory2)
                                                .select(qFundingStatusHistory2.fundingStatusHistoryNo.max())
                                                .where(qFundingStatusHistory2.funding.eq(qFunding)))
                                ), "status"), qFunding.targetAmount,
                        ExpressionUtils.as(ExpressionUtils.isNotNull(qFundingDetail.fundingDetailNo), "isRegDetail"),
                        ExpressionUtils.as(ExpressionUtils.isNotNull(qReview.reviewNo), "isRegReview"),
                        ExpressionUtils.as(ExpressionUtils.isNotNull(qUsageHistory.usageHistoryNo), "isRegUsage"))
                )
                .where(qFunding.adminNo.eq(adminNo))
                .fetch();
    }

    @Override
    public FundingDetailsRes getFunding(int fundingNo) {
        QFundingStatusHistory qFundingStatusHistory2 = QFundingStatusHistory.fundingStatusHistory;

        return from(qFunding)
                .leftJoin(qFundingDetail).on(qFunding.eq(qFundingDetail.funding))
                .leftJoin(qReview).on(qFunding.eq(qReview.funding))
                .leftJoin(qUsageHistory).on(qFunding.eq(qUsageHistory.funding))
                .select(Projections.fields(FundingDetailsRes.class, qFunding.fundingNo,
                        qFunding.issueNumber, qFunding.registrationNumber, qFunding.patientName,
                        qFunding.birth,
                        ExpressionUtils.as(from(qFundingStatusHistory)
                                .select(qFundingStatusHistory.status)
                                .where(qFundingStatusHistory.fundingStatusHistoryNo.eq(
                                        from(qFundingStatusHistory2)
                                                .select(qFundingStatusHistory2.fundingStatusHistoryNo.max())
                                                .where(qFundingStatusHistory2.funding.eq(qFunding)))
                                ), "status"), qFunding.gender, qFunding.diseaseName, qFunding.diseaseCode,
                        qFunding.diagnosisDate, qFunding.opinion, qFunding.title, qFunding.startDate, qFunding.endDate,
                        ExpressionUtils.as(from(qMemberFunding)
                                .select(qMemberFunding.amount.sum())
                                .where(qMemberFunding.funding.fundingNo.eq(fundingNo)), "totalAmount"),
                        qFunding.targetAmount,qFunding.createdAt, qFunding.phone,
                        ExpressionUtils.as(ExpressionUtils.isNotNull(qFundingDetail.fundingDetailNo), "isRegDetail"),
                        ExpressionUtils.as(ExpressionUtils.isNotNull(qReview.reviewNo), "isRegReview"),
                        ExpressionUtils.as(ExpressionUtils.isNotNull(qUsageHistory.usageHistoryNo), "isRegUsage"),
                        qFundingDetail.content, qFundingDetail.thumbnailUrl)
                )
                .where(qFunding.fundingNo.eq(fundingNo))
                .fetchJoin().fetchOne();
    }

}
