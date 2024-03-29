package com.giveus.admin.service.impl;

import com.giveus.admin.common.dto.CreateSuccessDto;
import com.giveus.admin.dto.request.FundingUsageCreateReq;
import com.giveus.admin.entity.Funding;
import com.giveus.admin.entity.UsageHistory;
import com.giveus.admin.exception.InvalidRequestException;
import com.giveus.admin.exception.UsageHistoryNotFoundException;
import com.giveus.admin.repository.UsageHistoryRepository;
import com.giveus.admin.service.FundingService;
import com.giveus.admin.service.MessageService;
import com.giveus.admin.service.UsageHistoryService;
import com.giveus.admin.transfer.UsageHistoryTransfer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UsageHistoryServiceImpl implements UsageHistoryService {
    private final UsageHistoryRepository usageHistoryRepository;
    private final MessageService messageService;
    private final FundingService fundingService;

    @Override
    @Transactional
    public CreateSuccessDto createFundingUsage(FundingUsageCreateReq req) {

        Funding funding = fundingService.getFundingEntity(req.getFundingNo());

        // 진행중인 펀딩이라면 사용 내역 등록 요청 시 예외 발생 처리
        if (!fundingService.isDoneFunding(funding)) {
            throw new InvalidRequestException();
        }

        // 펀딩 사용 내역 등록
        UsageHistory usageHistory = UsageHistoryTransfer.dtoToEntity(funding, req);
        UsageHistory savedUsageHistory = usageHistoryRepository.save(usageHistory);

        // 최초 등록일 시에 문자 전송
        if (getUsageHistoryList(req.getFundingNo()).isEmpty()) {
            String msg = "[giveus]\n" +
                    "안녕하세요, 기브어스입니다.\n" +
                    "아래의 링크에서 후원 후기를 나눠주세요!\n" +
                    "https://giveus.site/giveus/review/";
            messageService.sendMessage(funding.getPhone(), msg, funding.getRegId());
        }
        return new CreateSuccessDto(savedUsageHistory.getUsageHistoryNo());
    }

    private List<UsageHistory> getUsageHistoryList(int fundingNo) {
        return usageHistoryRepository.findByFunding_FundingNo(fundingNo);
    }

}
