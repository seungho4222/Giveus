package com.giveus.admin.repository;

import com.giveus.admin.entity.Funding;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FundingRepository extends JpaRepository<Funding, Integer>, FundingRepositoryCustom {

}
