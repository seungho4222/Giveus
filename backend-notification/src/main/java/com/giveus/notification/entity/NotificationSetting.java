package com.giveus.notification.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Table(name = "notification_setting")
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@DynamicInsert
public class NotificationSetting {

    @Id
    @Column(name = "member_no")
    private int memberNo;

    @ColumnDefault("true")
    @Column(name = "funding_review")
    private boolean fundingReview;

    @Column(name = "usage_history")
    private boolean usageHistory;

    @Column(name = "regular_funding")
    private boolean regularFunding;

    @Column(name = "recommend_funding")
    private boolean recommendFunding;


}
