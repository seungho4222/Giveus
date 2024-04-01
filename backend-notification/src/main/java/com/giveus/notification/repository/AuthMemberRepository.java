package com.giveus.notification.repository;

import com.giveus.notification.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuthMemberRepository extends JpaRepository<Member, Integer> {
    Optional<Member> findByProviderAndKey(String provider, String key);

}
