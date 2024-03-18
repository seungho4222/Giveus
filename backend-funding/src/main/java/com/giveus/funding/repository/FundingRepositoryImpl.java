package com.giveus.funding.repository;

import com.giveus.funding.dto.response.FundingListRes;
import com.giveus.funding.entity.Funding;
import com.giveus.funding.entity.QFunding;
import com.giveus.funding.entity.QFundingDetail;
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
    private static final QFundingDetail qFundingDetail = QFundingDetail.fundingDetail;

    public FundingRepositoryImpl() {
        super(Funding.class);
    }

    @Override
    public List<FundingListRes> getFundingList() {
        return from(qFundingDetail)
            .rightJoin(qFundingDetail.funding, qFunding)
            .select(Projections.constructor(FundingListRes.class, qFunding.fundingNo,
                qFunding.issueNumber, qFunding.registrationNumber, qFunding.patientName,
                qFunding.status, qFunding.title, ExpressionUtils.isNull(qFundingDetail.thumbnailUrl)
            ))
            .fetch();
    }
}
