package com.giveus.admin.repository;

import com.giveus.admin.entity.Funding;
import com.giveus.admin.entity.FundingStatusHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FundingStatusHistoryRepository extends JpaRepository<FundingStatusHistory, Integer> {

}
