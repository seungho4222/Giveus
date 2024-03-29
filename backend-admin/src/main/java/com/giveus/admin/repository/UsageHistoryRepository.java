package com.giveus.admin.repository;

import com.giveus.admin.entity.UsageHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsageHistoryRepository extends JpaRepository<UsageHistory, Integer> {

    List<UsageHistory> findByFunding_FundingNo(int fundingNo);
}
