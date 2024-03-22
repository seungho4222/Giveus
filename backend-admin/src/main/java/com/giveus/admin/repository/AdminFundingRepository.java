package com.giveus.admin.repository;

import com.giveus.admin.entity.AdminFunding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminFundingRepository extends JpaRepository<AdminFunding, Integer> {

}
