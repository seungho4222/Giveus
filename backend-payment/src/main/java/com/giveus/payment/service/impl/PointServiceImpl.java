package com.giveus.payment.service.impl;

import com.giveus.payment.dto.request.PointUsageReq;
import com.giveus.payment.dto.response.PointListRes;
import com.giveus.payment.entity.PointRecharge;
import com.giveus.payment.entity.PointUsage;
import com.giveus.payment.repository.PointRechargeRepository;
import com.giveus.payment.repository.PointUsageRepository;
import com.giveus.payment.service.PointService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheEvict;
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
    public int saveUsage(int memberNo, int point, String createdAt, DateTimeFormatter formatter) {

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
    @CacheEvict(value = "fundingList", key = "'fundingNo:'+#request.fundingNo")
    public int usePoint(PointUsageReq request, LocalDateTime now) {
        PointUsage pointUsage = PointUsage.builder()
                .memberNo(request.getMemberNo())
                .amount(request.getAmount())
                .createdAt(now)
                .build();

        return pointUsageRepository.save(pointUsage).getPointNo();
    }

    /**
     * inheritDoc
     */
    @Override
    @Transactional
    public int saveRecharge(int memberNo, int amount, String paymentType, String content, String createdAt, DateTimeFormatter formatter) {
        PointRecharge pointRecharge = PointRecharge.builder()
                .memberNo(memberNo)
                .amount(amount)
                .createdAt(LocalDateTime.parse(createdAt, formatter))
                .content(content)
                .paymentType(paymentType)
                .build();

        return pointRechargeRepository.save(pointRecharge).getPointNo();
    }
}
