package com.giveus.funding.service.impl;

import com.giveus.funding.dto.response.ReviewDetailRes;
import com.giveus.funding.entity.Review;
import com.giveus.funding.exception.ReviewNotFoundException;
import com.giveus.funding.repository.FundingRepository;
import com.giveus.funding.repository.ReviewRepository;
import com.giveus.funding.service.ReviewService;
import com.giveus.funding.transfer.ReviewTransfer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;

    private final FundingRepository fundingRepository;

    /**
     * @inheritDoc
     */
    @Override
    public List<ReviewDetailRes> getReviewList(int count) {
        List<ReviewDetailRes> reviews = reviewRepository.getReviewList(count);


        return null;
    }

    /**
     * @inheritDoc
     */
    @Override
    public ReviewDetailRes getReview(int fundingNo) {
        Review review = reviewRepository.findByFunding_FundingNo(fundingNo).orElseThrow(ReviewNotFoundException::new);

        return ReviewTransfer.entityToDto(review);
    }
}
