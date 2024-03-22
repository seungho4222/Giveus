package com.giveus.payment.service;

public interface MemberFundingService {
    int save(int memberNo, int fundingNo, int paymentNo, Integer pointUsageNo, String approvedAt, int total, boolean opened);
}
