package com.giveus.payment.repository;

import com.giveus.payment.entity.PaymentToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentTokenRepository extends JpaRepository<PaymentToken, Integer> {
}
