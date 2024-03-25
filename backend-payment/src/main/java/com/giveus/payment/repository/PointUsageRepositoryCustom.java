package com.giveus.payment.repository;

import com.giveus.payment.dto.response.PointUsageResDto;

import java.util.List;

public interface PointUsageRepositoryCustom {

    List<PointUsageResDto> getUsageList(int memberNo);

}
