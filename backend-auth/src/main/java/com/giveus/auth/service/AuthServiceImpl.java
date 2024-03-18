package com.giveus.auth.service;

import com.giveus.auth.common.util.JwtUtil;
import com.giveus.auth.dto.request.AuthJoinPostReq;
import com.giveus.auth.dto.response.MemberInfoRes;
import com.giveus.auth.entity.Member;
import com.giveus.auth.exception.NoMemberExistException;
import com.giveus.auth.repository.AuthRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {

    private final AuthRepository authRepository;

    private final JwtUtil jwtutil;

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

    @Override
    public MemberInfoRes findByAccessToken(HttpServletRequest httpServletRequest) {
        String accessToken = httpServletRequest.getHeader("Authorization").replace("Bearer", "");

        String provider = jwtutil.getProvider(accessToken);
        String snsKey = jwtutil.getSnsKey(accessToken);

        log.info("=== AuthServiceImpl - findByAccessToken === \n provider : {}, snsKey : {} ", provider, snsKey);
        Member member = authRepository.findByProviderAndKey(provider, snsKey).orElseThrow(NoMemberExistException::new);

        return MemberInfoRes.from(member);
    }

}
