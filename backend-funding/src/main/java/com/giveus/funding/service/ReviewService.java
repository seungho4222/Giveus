package com.giveus.funding.service;

import com.giveus.funding.dto.response.ReviewDetailRes;

import java.util.List;

public interface ReviewService {
    List<ReviewDetailRes> getReviewList(int count);

    ReviewDetailRes getReview(int fundingNo);
}
