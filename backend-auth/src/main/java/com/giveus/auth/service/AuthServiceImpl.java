package com.giveus.auth.service;

import com.giveus.auth.entity.Member;
import com.giveus.auth.repository.AuthRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {

    private final AuthRepository authRepository;

    @Override
    public Optional<Member> findByProviderAndKey(String provider, String key) {
        return authRepository.findByProviderAndKey(provider, key);
    }

}
