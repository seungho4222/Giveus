package com.giveus.payment.repository;

import com.giveus.payment.dto.response.PointRechargeResDto;

import java.util.List;

public interface PointRechargeRepositoryCustom {

    List<PointRechargeResDto> getRechargeList(int memberNo);
}
