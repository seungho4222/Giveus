package com.giveus.auth.service;

import com.giveus.auth.dto.request.AuthJoinPostReq;
import com.giveus.auth.dto.response.MemberInfoRes;
import com.giveus.auth.entity.Member;
import com.giveus.auth.exception.NoMemberExistException;
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
    public MemberInfoRes updateMember(AuthJoinPostReq userJoinPostReq) {
        String email = userJoinPostReq.getEmail();
        String provider = userJoinPostReq.getProvider();

        log.info("email = {}, provider = {}", email, provider);
        Member member = authRepository.findByProviderAndEmail(provider, email).orElseThrow(NoMemberExistException::new);
        member.updateName(userJoinPostReq.getName());
        member.updateNickname(userJoinPostReq.getNickname());

        authRepository.save(member);

        return MemberInfoRes.from(member);
    }

    @Override
    public Optional<Member> findByProviderAndKey(String provider, String key) {
        return authRepository.findByProviderAndKey(provider, key);
    }

    @Override
    public MemberInfoRes findByMemberNo(int memberNo) {
        log.info("=== AuthServiceImpl - findByMemberNum === \n memberNo : {}", memberNo);
        Member member = authRepository.findByMemberNo(memberNo).orElseThrow(NoMemberExistException::new);

        return MemberInfoRes.from(member);
    }

}
