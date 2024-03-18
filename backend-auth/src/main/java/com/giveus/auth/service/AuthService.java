package com.giveus.auth.service;

import com.giveus.auth.dto.request.AuthJoinPostReq;
import com.giveus.auth.dto.response.MemberInfoRes;
import com.giveus.auth.entity.Member;

import java.util.Optional;

public interface AuthService {

    MemberInfoRes updateMember(AuthJoinPostReq userJoinPostReq);

    Optional<Member> findByProviderAndKey(String provider, String key);

    MemberInfoRes findByMemberNo(int memberNo);
}
