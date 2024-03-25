package com.giveus.payment.service;

import com.giveus.payment.dto.request.PointUsageRequest;
import com.giveus.payment.dto.response.PointListRes;

import java.time.LocalDateTime;

public interface PointService {
    int saveUsage(int memberNo, int point, String approvedAt);

    PointListRes getPointList(int memberNo);

    int usePoint(PointUsageRequest request, LocalDateTime now);
}
