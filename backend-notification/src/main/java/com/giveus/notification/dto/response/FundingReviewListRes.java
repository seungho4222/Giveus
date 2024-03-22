package com.giveus.notification.dto.response;

import com.giveus.notification.entity.enums.NotificationCategory;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@AllArgsConstructor
@ToString
public class FundingReviewListRes {

    private int memberNo;

    private int fundingNo;

    private boolean fundingReview;

    private String deviceToken;

}
