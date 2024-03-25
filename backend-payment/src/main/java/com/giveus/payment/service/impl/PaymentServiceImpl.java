package com.giveus.payment.service.impl;

import com.giveus.payment.dto.response.KakaoPayApproveResDto;
import com.giveus.payment.entity.Payment;
import com.giveus.payment.repository.PaymentRepository;
import com.giveus.payment.service.PaymentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.web.format.DateTimeFormatters;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
@Slf4j
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;

    @Override
    @Transactional
    public int save(KakaoPayApproveResDto kakaoApprove) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
        Payment payment = Payment.builder()
                .createdAt(LocalDateTime.parse(kakaoApprove.getApproved_at(), formatter))
                .method("카카오페이")
                .amount(kakaoApprove.getAmount().getTotal())
                .build();
        return paymentRepository.save(payment).getPaymentNo();
    }
}
