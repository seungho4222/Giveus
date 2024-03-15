package com.giveus.auth.repository;

import com.giveus.auth.dto.response.MemberInfoRes;
import com.giveus.auth.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuthRepository extends JpaRepository<Member, Integer> {
    Optional<Member> findByProviderAndKey(String provider, String key);

    Optional<Member> findByProviderAndEmail(String provider, String email);

    Optional<Member> findByMemberNo(int memberNo);
}
