package com.giveus.payment.dto.request;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class KakaoPayRechargeReq {

    private int memberNo;
    private int amount;

}
