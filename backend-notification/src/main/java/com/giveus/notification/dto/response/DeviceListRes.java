package com.giveus.notification.dto.response;

import com.giveus.notification.entity.enums.NotificationCategory;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@Builder
@AllArgsConstructor
@ToString
public class DeviceListRes {

    private NotificationCategory category; // REVIEW, USAGE, PAYMENT, RECOMMEND

    private int memberNo;

    private int fundingNo;

    private boolean fundingReview;

//    private boolean usuageHistory;

//    private boolean regularPayment;

//    private boolean recommentFunding;

    private String deviceToken;

    public void updateCategory(NotificationCategory category) {
        this.category = category;
    }
}
