package com.giveus.admin.service.impl;

import com.giveus.admin.common.dto.CreateSuccessDto;
import com.giveus.admin.entity.AdminFunding;
import com.giveus.admin.entity.Funding;
import com.giveus.admin.repository.AdminFundingRepository;
import com.giveus.admin.service.AdminFundingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminFundingServiceImpl implements AdminFundingService {
    private final AdminFundingRepository adminFundingRepository;
    @Override
    public CreateSuccessDto createAdminFunding(int adminNo, Funding funding) {
        AdminFunding adminFunding = new AdminFunding();
        adminFunding.setFunding(funding);
        adminFunding.setAdminNo(adminNo);
        AdminFunding savedAdminFunding = adminFundingRepository.save(adminFunding);

        return new CreateSuccessDto(savedAdminFunding.getAdminFundingNo());
    }
}
