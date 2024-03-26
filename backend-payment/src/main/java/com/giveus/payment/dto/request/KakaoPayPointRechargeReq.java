package com.giveus.payment.dto.request;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class KakaoPayPointRechargeReq {

    private int memberNo;
    private int amount;

}
