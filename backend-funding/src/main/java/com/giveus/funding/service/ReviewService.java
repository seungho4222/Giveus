package com.giveus.funding.service;

import com.giveus.funding.dto.response.ReviewDetailRes;
import com.giveus.funding.entity.Review;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    List<ReviewDetailRes> getReviewList(int count);

    ReviewDetailRes getReview(int fundingNo);

    void createReview(Review review);

    Optional<Review> findReviewEntity(int fundingNo);
}
