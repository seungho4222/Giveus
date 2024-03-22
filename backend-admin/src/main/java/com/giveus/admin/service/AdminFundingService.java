package com.giveus.admin.service;

import com.giveus.admin.common.dto.CreateSuccessDto;
import com.giveus.admin.dto.request.FundingCreateReq;
import com.giveus.admin.entity.Funding;

public interface AdminFundingService {
    CreateSuccessDto createAdminFunding(int adminNo, Funding funding);
}
