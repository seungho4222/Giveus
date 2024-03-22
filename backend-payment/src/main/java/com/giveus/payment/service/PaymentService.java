package com.giveus.payment.service;

import com.giveus.payment.dto.response.KakaoPayApproveResDto;

public interface PaymentService {
    int save(KakaoPayApproveResDto kakaoApprove);
}
