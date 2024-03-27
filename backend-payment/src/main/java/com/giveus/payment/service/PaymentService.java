package com.giveus.payment.service;

import com.giveus.payment.dto.response.KakaoPayApproveResDto;

public interface PaymentService {

    /**
     * 카카오페이 결제 완료 시 결제 DB 테이블에 데이터를 저장하기 위해 사용하는 메서드입니다.
     * @param kakaoApprove 카카오페이 결제 승인 응답 바디
     * @return 결제 PK
     */
    int save(KakaoPayApproveResDto kakaoApprove);
}
