package com.giveus.payment.service.impl;

import com.giveus.payment.dto.request.PointUsageReq;
import com.giveus.payment.entity.MemberFunding;
import com.giveus.payment.entity.Payment;
import com.giveus.payment.entity.PointUsage;
import com.giveus.payment.repository.MemberFundingRepository;
import com.giveus.payment.repository.PaymentRepository;
import com.giveus.payment.repository.PointUsageRepository;
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
    private final PaymentRepository paymentRepository;
    private final PointUsageRepository pointUsageRepository;

    /**
     * @inheritDoc
     */
    @Override
    @Transactional
    public int save(int memberNo, int fundingNo, String method,
                    String createdAt, int amount, int point, boolean opened, DateTimeFormatter formatter) {

        Integer pointUsageNo = null;
        if (point > 0) {
            PointUsage pointUsage = PointUsage.builder()
                    .memberNo(memberNo)
                    .amount(point)
                    .createdAt(LocalDateTime.parse(createdAt, formatter))
                    .build();
            pointUsageNo = pointUsageRepository.save(pointUsage).getPointNo();
        }
        Payment payment = Payment.builder()
                .createdAt(LocalDateTime.parse(createdAt, formatter))
                .method(method)
                .amount(amount)
                .build();
        int paymentNo = paymentRepository.save(payment).getPaymentNo();

        MemberFunding memberFunding = MemberFunding.builder()
                .memberNo(memberNo)
                .fundingNo(fundingNo)
                .paymentNo(paymentNo)
                .pointNo(pointUsageNo)
                .createdAt(LocalDateTime.parse(createdAt, formatter))
                .amount(amount + point)
                .isPublic(opened)
                .build();

        return memberFundingRepository.save(memberFunding).getMemberFundingNo();
    }

    /**
     * @inheritDoc
     */
    @Override
    @Transactional
    public int save(PointUsageReq request, int pointNo, LocalDateTime now) {
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
