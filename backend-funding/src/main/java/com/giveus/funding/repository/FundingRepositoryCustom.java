package com.giveus.funding.repository;

import com.giveus.funding.dto.response.FundingDetailRes;
import com.giveus.funding.dto.response.FundingListRes;
import java.util.List;
import org.springframework.data.repository.NoRepositoryBean;

/**
 * @author 이하늬
 * @since 1.0
 */
@NoRepositoryBean
public interface FundingRepositoryCustom {
    List<FundingListRes> getFundingList();
    FundingDetailRes getFunding(int fundingNo);
}
