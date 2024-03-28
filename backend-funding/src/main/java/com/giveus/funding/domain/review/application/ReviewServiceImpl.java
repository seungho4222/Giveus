package com.giveus.funding.domain.review.application;

import com.giveus.funding.domain.review.dao.ReviewRepository;
import com.giveus.funding.domain.review.domain.Review;
import com.giveus.funding.domain.review.dto.ReviewDetailRes;
import com.giveus.funding.domain.review.exception.ReviewNotFoundException;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

        return ReviewDetailRes.builder()
            .reviewNo(review.getReviewNo())
            .fundingNo(review.getFunding().getFundingNo())
            .title(review.getTitle())
            .content(review.getContent())
            .createdAt(review.getCreatedAt())
            .url(review.getUrl())
            .build();
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
