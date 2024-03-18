package com.giveus.funding.repository;

import com.giveus.funding.entity.Funding;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FundingRepository extends JpaRepository<Funding, Integer>, FundingRepositoryCustom {

}
