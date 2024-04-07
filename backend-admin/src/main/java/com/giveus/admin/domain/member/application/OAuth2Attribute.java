package com.giveus.admin.domain.member.application;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.Map;

/**
 * OAuth 인증을 통해 얻어온 사용자의 정보와 속성들(이메일, 프로필 사진, 닉네임 등)을
 * Map 형태로 반환받기 위해 사용하는 빌더 클래스
 */
@Slf4j
@ToString
@Builder
@Getter
public class OAuth2Attribute {
    private Map<String, Object> attributes;
    private String attributeKey;
    private String email;
    private String name;
    private String profileImage;
    private String provider;

    // OAuth2 제공자에 따라 객체를 생성
    static OAuth2Attribute of(String provider, String attributeKey, Map<String, Object> attributes) {
        switch (provider) {
            case "kakao":
                return ofKakao(provider,"id", attributes);
            case "naver":
                return ofNaver(provider, "id", attributes);
            default:
                throw new RuntimeException();
        }
    }

    /*
     *   Kakao 로그인일 경우 사용하는 메서드, 필요한 사용자 정보가 kakao_acount -> profile 두번 감싸져 있어서,
     *   두번 get() 메서드를 이용해 사용자 정보를 담고있는 Map을 꺼내야함
     * */
    private static OAuth2Attribute ofKakao(String provider, String attributeKey, Map<String, Object> attributes) {
        Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
        Map<String, Object> kakaoProfile = (Map<String, Object>) kakaoAccount.get("profile");

        return OAuth2Attribute.builder()
                .email((String) kakaoAccount.get("email"))
                .provider(provider)
                .attributes(kakaoAccount)
                .attributeKey(String.valueOf(attributes.get(attributeKey)))
                .name((String) kakaoProfile.get("nickname"))
//                .profileImage((String) kakaoProfile.get("profile_image_url"))
                .build();
    }

    /*
     *  Naver 로그인일 경우 사용하는 메서드, 필요한 사용자 정보가 response Map에 감싸져 있어서,
     *  한번 get() 메서드를 이용해 사용자 정보를 담고있는 Map을 꺼내야함
     * */
    private static OAuth2Attribute ofNaver(String provider, String attributeKey, Map<String, Object> attributes) {
        Map<String, Object> response = (Map<String, Object>) attributes.get("response");

        return OAuth2Attribute.builder()
                .email((String) response.get("email"))
                .provider(provider)
                .attributes(response)
                .attributeKey(String.valueOf(attributes.get(attributeKey)))
                .name((String) response.get("name"))
//                .profileImage((String) response.get("profile_image"))
                .build();
    }

    Map<String, Object> convertToMap() {
        Map<String, Object> map = new HashMap<>();
        map.put("key", attributeKey);
        map.put("email", email);
        map.put("name", name);
//        map.put("imageUrl", profileImage);
        map.put("provider", provider);

        return map;
    }
}