package com.giveus.payment.service;

import com.giveus.payment.dto.response.PointListRes;

public interface PointService {
    int saveUsage(int memberNo, int point, String approvedAt);

    PointListRes getPointList(int memberNo);
}
