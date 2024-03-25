package com.giveus.payment.service.impl;

import com.giveus.payment.dto.request.PointUsageRequest;
import com.giveus.payment.entity.MemberFunding;
import com.giveus.payment.repository.MemberFundingRepository;
import com.giveus.payment.service.MemberFundingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberFundingServiceImpl implements MemberFundingService {

    private final MemberFundingRepository memberFundingRepository;

    @Override
    @Transactional
    public int save(int memberNo, int fundingNo, int paymentNo, Integer pointUsageNo,
                    String approvedAt, int total, boolean opened) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

        MemberFunding memberFunding = MemberFunding.builder()
                .memberNo(memberNo)
                .fundingNo(fundingNo)
                .paymentNo(paymentNo)
                .pointNo(pointUsageNo)
                .createdAt(LocalDateTime.parse(approvedAt, formatter))
                .amount(total)
                .isPublic(opened)
                .build();

        return memberFundingRepository.save(memberFunding).getMemberFundingNo();
    }

    @Override
    @Transactional
    public int save(PointUsageRequest request, int pointNo, LocalDateTime now) {
        MemberFunding memberFunding = MemberFunding.builder()
                .memberNo(request.getMemberNo())
                .fundingNo(request.getFundingNo())
                .pointNo(pointNo)
                .createdAt(now)
                .amount(request.getAmount())
                .isPublic(request.isOpened())
                .build();
        return memberFundingRepository.save(memberFunding).getMemberFundingNo();
    }
}
