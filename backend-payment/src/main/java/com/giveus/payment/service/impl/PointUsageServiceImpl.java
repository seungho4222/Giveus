package com.giveus.payment.service.impl;

import com.giveus.payment.entity.PointUsage;
import com.giveus.payment.repository.PointUsageRepository;
import com.giveus.payment.service.PointUsageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
@Slf4j
public class PointUsageServiceImpl implements PointUsageService {

    private final PointUsageRepository pointUsageRepository;

    @Override
    @Transactional
    public int save(int memberNo, int point, String approvedAt) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

        PointUsage pointUsage = PointUsage.builder()
                .memberNo(memberNo)
                .amount(point)
                .createdAt(LocalDateTime.parse(approvedAt, formatter))
                .build();

        return pointUsageRepository.save(pointUsage).getPointNo();
    }
}
