package com.giveus.payment.service.impl;

import com.giveus.payment.dto.request.PointUsageRequest;
import com.giveus.payment.dto.response.PointListRes;
import com.giveus.payment.entity.PointUsage;
import com.giveus.payment.repository.PointRechargeRepository;
import com.giveus.payment.repository.PointUsageRepository;
import com.giveus.payment.service.PointService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
@Slf4j
public class PointServiceImpl implements PointService {

    private final PointUsageRepository pointUsageRepository;
    private final PointRechargeRepository pointRechargeRepository;

    @Override
    @Transactional
    public int saveUsage(int memberNo, int point, String approvedAt) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

        PointUsage pointUsage = PointUsage.builder()
                .memberNo(memberNo)
                .amount(point)
                .createdAt(LocalDateTime.parse(approvedAt, formatter))
                .build();

        return pointUsageRepository.save(pointUsage).getPointNo();
    }

    @Override
    @Transactional(readOnly = true)
    public PointListRes getPointList(int memberNo) {

        return PointListRes.builder()
                .usageList(pointUsageRepository.getUsageList(memberNo))
                .rechargeList(pointRechargeRepository.getRechargeList(memberNo))
                .build();
    }

    @Override
    @Transactional
    public int usePoint(PointUsageRequest request, LocalDateTime now) {
        PointUsage pointUsage = PointUsage.builder()
                .memberNo(request.getMemberNo())
                .amount(request.getAmount())
                .createdAt(now)
                .build();

        return pointUsageRepository.save(pointUsage).getPointNo();
    }
}
