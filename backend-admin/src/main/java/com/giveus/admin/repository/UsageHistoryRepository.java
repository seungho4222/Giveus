package com.giveus.admin.repository;

import com.giveus.admin.entity.UsageHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsageHistoryRepository extends JpaRepository<UsageHistory, Integer> {

}
