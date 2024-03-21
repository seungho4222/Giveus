package com.giveus.payment.service.impl;

import com.giveus.payment.repository.PaymentTokenRepository;
import com.giveus.payment.service.PaymentTokenService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class PaymentTokenServiceImpl implements PaymentTokenService {

    private final PaymentTokenRepository paymentTokenRepository;

}
