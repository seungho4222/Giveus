package com.giveus.funding.repository.impl;

import com.giveus.funding.dto.response.ReviewDetailRes;
import com.giveus.funding.entity.QFunding;
import com.giveus.funding.entity.QReview;
import com.giveus.funding.entity.Review;
import com.giveus.funding.repository.ReviewRepositoryCustom;
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
