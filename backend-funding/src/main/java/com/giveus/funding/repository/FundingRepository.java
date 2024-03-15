package com.giveus.funding.repository;

import com.giveus.funding.entity.Funding;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FundingRepository extends JpaRepository<Funding, Integer> {

}
