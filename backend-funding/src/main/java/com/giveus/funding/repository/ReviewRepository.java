package com.giveus.funding.repository;

import com.giveus.funding.dto.response.ReviewDetailRes;
import com.giveus.funding.entity.Funding;
import com.giveus.funding.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

//    Optional<ReviewDetailRes> findReviewByFundingNo(int fundingNo);


}
