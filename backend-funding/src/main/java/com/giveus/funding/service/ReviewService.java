package com.giveus.funding.service;

import com.giveus.funding.dto.response.ReviewDetailRes;
import com.giveus.funding.dto.response.ReviewListRes;

import java.util.List;

public interface ReviewService {
    List<ReviewListRes> getReviewList(int count);

    ReviewDetailRes getReview(int fundingNo);
}
