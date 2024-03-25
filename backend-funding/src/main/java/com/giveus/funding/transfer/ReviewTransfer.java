package com.giveus.funding.transfer;

import com.giveus.funding.dto.request.ReviewCreateReq;
import com.giveus.funding.entity.Funding;
import com.giveus.funding.entity.Review;

public class ReviewTransfer {
    public static Review dtoToEntity(Funding funding, ReviewCreateReq req) {
        return Review.builder()
                .title(req.getTitle())
                .content(req.getContent())
                .funding(funding)
                .build();


    }

}
