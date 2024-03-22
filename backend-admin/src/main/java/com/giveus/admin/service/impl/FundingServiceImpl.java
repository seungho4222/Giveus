package com.giveus.admin.service.impl;

import com.giveus.admin.dto.request.FundingCreateReq;
import com.giveus.admin.dto.response.FundingDetailsRes;
import com.giveus.admin.dto.response.FundingListRes;
import com.giveus.admin.entity.Funding;
import com.giveus.admin.entity.FundingStatusHistory;
import com.giveus.admin.repository.FundingRepository;
import com.giveus.admin.service.FundingService;
import com.giveus.admin.service.MessageService;
import com.giveus.admin.transfer.FundingStatusHistoryTransfer;
import com.giveus.admin.transfer.FundingTransfer;

import java.util.List;
import java.util.UUID;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class FundingServiceImpl implements FundingService {
    private final FundingRepository fundingRepository;
    private final MessageService messageService;

    @Override
    @Transactional
    public FundingDetailsRes createFunding(FundingCreateReq fundingCreateReq) {

        // 펀딩 등록
        Funding funding = FundingTransfer.dtoToEntity(fundingCreateReq);
        FundingStatusHistory status = FundingStatusHistoryTransfer.dtoToEntityCreated(funding);
        funding.addStatus(status);
        String regId = generateRegId();
        funding.setRegId(regId);
        Funding savedFunding = fundingRepository.save(funding);

        // 문자 전송
        messageService.sendMessage(funding.getPhone(), regId);

        return FundingTransfer.entityToDto(savedFunding);
    }

    /**
     * 펀딩 등록 고유 ID를 생성하는 메서드입니다.
     *
     * @return 생성한 고유 ID
     */
    private String generateRegId() {
        String random = UUID.randomUUID().toString();
        random = random.replace("-", "");
        random = random.substring(0, 10);
        return random;
    }

    @Override
    public List<FundingListRes> getFundingList() {
        return fundingRepository.getFundingList();
    }
}
