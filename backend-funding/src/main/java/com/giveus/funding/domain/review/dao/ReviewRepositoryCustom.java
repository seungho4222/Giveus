package com.giveus.funding.domain.review.dao;

import com.giveus.funding.domain.review.dto.ReviewDetailRes;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface ReviewRepositoryCustom {
    List<ReviewDetailRes> getReviewList(int count);

}
