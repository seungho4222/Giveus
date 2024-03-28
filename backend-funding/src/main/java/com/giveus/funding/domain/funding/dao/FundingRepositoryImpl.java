package com.giveus.funding.domain.funding.dao;

import com.giveus.funding.domain.donation.dto.DonationAmountRes;
import com.giveus.funding.domain.donation.dto.DonationListRes;
import com.giveus.funding.domain.donation.dto.MemberDonationListRes;
import com.giveus.funding.domain.funding.domain.Funding;
import com.giveus.funding.domain.funding.dto.FundingDetailRes;
import com.giveus.funding.domain.funding.dto.FundingListRes;
import com.giveus.funding.entity.*;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.time.LocalDate;
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

        return getFundingListResJPQLQuery()
                .fetch();
    }

    private OrderSpecifier<?> isSorting(String sort) {
        if (sort.isBlank()) {
            return null;
        }

//        if (sort.equals("startDate")) {
//            return qFunding.startDate
//        }
//
//        if (sort.equals("endDate")) {
//
//        }

        return null;
    }

    private long isLimit(Integer limit) {
        return 0;
    }


    @Override
    public List<MemberDonationListRes> getMemberFundingList(int memberNo) {

        QFundingStatusHistory qFundingStatusHistory2 = QFundingStatusHistory.fundingStatusHistory;

        return from(qFundingDetail)
                .leftJoin(qFundingDetail.funding, qFunding)
                .rightJoin(qMemberFunding).on(qFunding.eq(qMemberFunding.funding))
                .select(Projections.fields(MemberDonationListRes.class,
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
                        , qFunding.startDate, qFunding.endDate, qFunding.birth, qMemberFunding.memberFundingNo, qMemberFunding.amount, qMemberFunding.createdAt))
                .where(qMemberFunding.member.memberNo.eq(memberNo))
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
    public List<DonationListRes> getParticipantListByFunding(int fundingNo) {
        return from(qMemberFunding)
                .innerJoin(qMemberFunding.member, qMember)
                .on(qMemberFunding.funding.fundingNo.eq(fundingNo))
                .select(Projections.fields(DonationListRes.class,
                        qMemberFunding.memberFundingNo,
                        qMemberFunding.isPublic.when(true).then(qMember.name)
                                .when(false).then(qMember.nickname)
                                .otherwise("").as("name"),
                        qMemberFunding.amount, qMemberFunding.createdAt, qMemberFunding.isPublic,
                        qMemberFunding.isPublic.when(true).then(qMember.imageUrl)
                                .otherwise("").as("imageUrl")))
                .orderBy(qMemberFunding.createdAt.desc())
                .fetch();
    }

    @Override
    public List<FundingListRes> getFundingByFundingTitle(String query) {
        return getFundingListResJPQLQuery()
                .where(qFunding.title.contains(query))
                .fetch();
    }

    @Override
    public DonationAmountRes getDonationAmount() {
        return from(qMemberFunding)
                .select(Projections.constructor(DonationAmountRes.class,
                        qMemberFunding.amount.sum()))
                .fetchOne();
    }

    @Override
    public List<DonationListRes> getParticipantList(int limit) {
        return from(qMemberFunding)
                .innerJoin(qMemberFunding.member, qMember)
                .select(Projections.fields(DonationListRes.class,
                        qMemberFunding.memberFundingNo,
                        qMemberFunding.isPublic.when(true).then(qMember.name)
                                .otherwise(qMember.nickname).as("name"),
                        qMemberFunding.amount, qMemberFunding.createdAt, qMemberFunding.isPublic,
                        qMemberFunding.isPublic.when(true).then(qMember.imageUrl)
                                .otherwise("").as("imageUrl")))
                .orderBy(qMemberFunding.createdAt.desc())
                .limit(limit)
                .fetch();
    }

    @Override
    public List<FundingListRes> getFundingListSortByEndDate(Integer limit) {

        return getFundingListResJPQLQuery()
                .where(qFunding.endDate.goe(LocalDate.now())) // 종료일이 오늘이거나 오늘 이전인 것 중에
                .orderBy(qFunding.endDate.asc())
                .limit(limit)
                .fetch();
    }


    /**
     * 펀딩 목록 JPQLQuery를 조회하는 메서드입니다.
     *
     * @return 조회한 펀딩 목록
     */
    private JPQLQuery<FundingListRes> getFundingListResJPQLQuery() {
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
                        , qFunding.startDate, qFunding.endDate, qFunding.createdAt, qFunding.birth));
    }
}
