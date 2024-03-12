package com.giveus.auth.service;

import com.giveus.auth.entity.Member;

import java.util.Optional;

public interface AuthService {
    Optional<Member> findByProviderAndKey(String provider, String key);

}
