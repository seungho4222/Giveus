package com.giveus.payment.dto.request;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class PointUsageReq {

    private int memberNo;
    private int fundingNo;
    private int amount;
    private boolean opened;

}
