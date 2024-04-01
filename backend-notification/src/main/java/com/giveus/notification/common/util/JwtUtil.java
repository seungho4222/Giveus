package com.giveus.notification.common.util;

import io.jsonwebtoken.Jwts;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


@Slf4j
@Service
@RequiredArgsConstructor
public class JwtUtil {

    @Value("${jwt.secret}")
    private String secret;

    // 토큰에서 sns_key 추출
    public String getSnsKey(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }

    // 토큰에서 provider 추출
    public String getProvider(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().get("provider", String.class);
    }

}
