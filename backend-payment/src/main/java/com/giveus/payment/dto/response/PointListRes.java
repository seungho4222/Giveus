package com.giveus.payment.dto.response;

import lombok.*;

import java.util.List;

@Getter
@AllArgsConstructor
@Builder
@ToString
public class PointListRes {

    private List<PointUsageRes> usageList;
    private List<PointRechargeRes> rechargeList;

}
