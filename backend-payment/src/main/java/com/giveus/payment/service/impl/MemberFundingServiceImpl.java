package com.giveus.payment.service.impl;

import com.giveus.payment.repository.MemberFundingRepository;
import com.giveus.payment.service.MemberFundingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberFundingServiceImpl implements MemberFundingService {

    private final MemberFundingRepository memberFundingRepository;

}
