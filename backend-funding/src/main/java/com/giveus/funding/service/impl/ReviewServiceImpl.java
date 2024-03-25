package com.giveus.funding.service.impl;

import com.giveus.funding.dto.response.ReviewDetailRes;
import com.giveus.funding.dto.response.ReviewListRes;
import com.giveus.funding.entity.Review;
import com.giveus.funding.repository.ReviewRepository;
import com.giveus.funding.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;

    /**
     * @inheritDoc
     */
    @Override
    public List<ReviewListRes> getReviewList(int count) {
        return null;
    }

    /**
     * @inheritDoc
     */
    @Override
    public ReviewDetailRes getReview(int fundingNo) {
//        return reviewRepository.findReviewByFundingNo(fundingNo).orElseThrow(ReviewNotFoundException::new);
        return null;
    }

    @Override
    public void createReview(Review review) {
        reviewRepository.save(review);
    }

    @Override
    public Optional<Review> findReviewEntity(int fundingNo) {
        return reviewRepository.findReviewByFunding_FundingNo(fundingNo);
    }
}
