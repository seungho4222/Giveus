package com.giveus.payment.dto.request;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class TossPayDonateReq {

    private int memberNo;
    private int fundingNo;
    private int amount;
    private int point;
    private String title;
    private boolean opened;

}
