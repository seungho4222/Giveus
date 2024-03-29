package com.giveus.admin.domain.usage.application;

import com.giveus.admin.global.common.response.CreateSuccessDto;
import com.giveus.admin.domain.usage.dto.FundingUsageCreateReq;
import com.giveus.admin.domain.funding.domain.Funding;
import com.giveus.admin.domain.usage.domain.UsageHistory;
import com.giveus.admin.global.error.exception.InvalidRequestException;
import com.giveus.admin.domain.usage.dao.UsageHistoryRepository;
import com.giveus.admin.domain.funding.application.FundingService;
import com.giveus.admin.infra.sms.CoolSmsClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UsageHistoryServiceImpl implements UsageHistoryService {
    private final UsageHistoryRepository usageHistoryRepository;
    private final FundingService fundingService;
    private final CoolSmsClient coolSmsClient;

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
            coolSmsClient.send(funding.getPhone(), msg, funding.getRegId());
        }
        return new CreateSuccessDto(savedUsageHistory.getUsageHistoryNo());
    }

    private List<UsageHistory> getUsageHistoryList(int fundingNo) {
        return usageHistoryRepository.findByFunding_FundingNo(fundingNo);
    }

}
