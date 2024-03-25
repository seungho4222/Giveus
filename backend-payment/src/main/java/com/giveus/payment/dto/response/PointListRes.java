package com.giveus.payment.dto.response;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
@Builder
@ToString
public class PointListRes {

    private List<PointUsageResDto> usageList;
    private List<PointRechargeResDto> rechargeList;

}
