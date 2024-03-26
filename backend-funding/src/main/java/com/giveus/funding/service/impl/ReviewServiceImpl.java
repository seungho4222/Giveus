package com.giveus.funding.service.impl;

import com.giveus.funding.dto.response.ReviewDetailRes;
import com.giveus.funding.entity.Review;
import com.giveus.funding.exception.ReviewNotFoundException;
import com.giveus.funding.repository.ReviewRepository;
import com.giveus.funding.service.ReviewService;
import com.giveus.funding.transfer.ReviewTransfer;
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
    public List<ReviewDetailRes> getReviewList(int count) {
        return reviewRepository.getReviewList(count);
    }

    /**
     * @inheritDoc
     */
    @Override
    public ReviewDetailRes getReview(int fundingNo) {
        Review review = reviewRepository.findReviewByFunding_FundingNo(fundingNo)
                .orElseThrow(ReviewNotFoundException::new);

        return ReviewTransfer.entityToDto(review);
    }

    /**
     * @inheritDoc
     */
    @Override
    public void createReview(Review review) {
        reviewRepository.save(review);
    }

    /**
     * @inheritDoc
     */
    @Override
    public Optional<Review> findReviewEntity(int fundingNo) {
        return reviewRepository.findReviewByFunding_FundingNo(fundingNo);
    }
}
