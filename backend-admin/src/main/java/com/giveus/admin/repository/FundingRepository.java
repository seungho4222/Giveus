package com.giveus.admin.repository;

import com.giveus.admin.entity.Funding;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FundingRepository extends JpaRepository<Funding, Integer>, FundingRepositoryCustom {
    Optional<Funding> findFundingByFundingNo(int fundingNo);
}
