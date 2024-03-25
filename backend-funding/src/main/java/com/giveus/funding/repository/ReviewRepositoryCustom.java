package com.giveus.funding.repository;

import com.giveus.funding.dto.response.ReviewDetailRes;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface ReviewRepositoryCustom {
    List<ReviewDetailRes> getReviewList(int count);

}
