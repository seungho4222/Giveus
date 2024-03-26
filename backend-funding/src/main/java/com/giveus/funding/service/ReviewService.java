package com.giveus.funding.service;

import com.giveus.funding.dto.response.ReviewDetailRes;
import com.giveus.funding.entity.Review;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    List<ReviewDetailRes> getReviewList(int count);

    ReviewDetailRes getReview(int fundingNo);

    /**
     * 후기를 등록하는 메서드입니다.
     * 
      * @param review 등록할 후기 엔터티
     */
    void createReview(Review review);

    /**
     * 펀딩 고유 번호로 후기 엔터티를 조회하는 메서드입니다. 
     * 
     * @param fundingNo 조회할 펀딩 고유 번호
     * @return 조회한 후기 엔터티
     */
    Optional<Review> findReviewEntity(int fundingNo);
}
