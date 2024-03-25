package com.giveus.funding.repository;

import com.giveus.funding.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

    Optional<Review> findByFunding_FundingNo(int fundingNo);

}
