package com.giveus.payment.service;

import com.giveus.payment.dto.request.PointUsageRequest;

import java.time.LocalDateTime;

public interface MemberFundingService {
    int save(int memberNo, int fundingNo, int paymentNo, Integer pointUsageNo, String approvedAt, int total, boolean opened);

    int save(PointUsageRequest request, int pointNo, LocalDateTime now);
}
