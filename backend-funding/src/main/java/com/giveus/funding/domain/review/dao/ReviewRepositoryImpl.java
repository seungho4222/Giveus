package com.giveus.funding.domain.review.dao;

import com.giveus.funding.domain.funding.domain.QFunding;
import com.giveus.funding.domain.review.domain.QReview;
import com.giveus.funding.domain.review.domain.Review;
import com.giveus.funding.domain.review.dto.ReviewDetailRes;
import com.querydsl.core.types.Projections;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

public class ReviewRepositoryImpl extends QuerydslRepositorySupport implements ReviewRepositoryCustom {

    private static final QReview qReview = QReview.review;
    private static final QFunding qFunding = QFunding.funding;

    public ReviewRepositoryImpl() {super((Review.class));}


    @Override
    public List<ReviewDetailRes> getReviewList(int count) {

        return from(qReview)
                .orderBy(qReview.createdAt.desc())
                .limit(count)
                .select(Projections.fields(ReviewDetailRes.class,
                        qReview.reviewNo, qReview.funding.fundingNo, qReview.title, qReview.content, qReview.createdAt, qReview.url
                ))
                .fetch();
    }
}
