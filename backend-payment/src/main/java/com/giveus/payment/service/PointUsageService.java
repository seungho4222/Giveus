package com.giveus.payment.service;

public interface PointUsageService {
    int save(int memberNo, int point, String approvedAt);
}
