package com.giveus.payment.service.impl;

import com.giveus.payment.dto.request.PointUsageRequest;
import com.giveus.payment.dto.response.PointListRes;
import com.giveus.payment.entity.PointRecharge;
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

    /**
     * @inheritDoc
     */
    @Override
    @Transactional
    public int saveUsage(int memberNo, int point, String createdAt) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

        PointUsage pointUsage = PointUsage.builder()
                .memberNo(memberNo)
                .amount(point)
                .createdAt(LocalDateTime.parse(createdAt, formatter))
                .build();

        return pointUsageRepository.save(pointUsage).getPointNo();
    }

    /**
     * @inheritDoc
     */
    @Override
    @Transactional(readOnly = true)
    public PointListRes getPointList(int memberNo) {

        return PointListRes.builder()
                .usageList(pointUsageRepository.getUsageList(memberNo))
                .rechargeList(pointRechargeRepository.getRechargeList(memberNo))
                .build();
    }

    /**
     * @inheritDoc
     */
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

    /**
     * @inheritDoc
     */
    @Override
    @Transactional
    public int saveRecharge(int memberNo, int amount, LocalDateTime now) {
        PointRecharge pointRecharge = PointRecharge.builder()
                .memberNo(memberNo)
                .amount(amount)
                .content("일반 포인트 충전")
                .createdAt(now)
                .paymentType("카카오페이")
                .build();
        return pointRechargeRepository.save(pointRecharge).getPointNo();
    }
}
