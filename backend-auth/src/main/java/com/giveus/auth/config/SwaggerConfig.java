package com.giveus.auth.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * API 문서 관련 springdoc 설정 정의.
 */
@OpenAPIDefinition(
        servers = {
                @Server(url = "https://j10c108.p.ssafy.io", description = "배포 Auth 서버 API"),
                @Server(url = "http://localhost:8082", description = "로컬 Auth 서버 API"),
        },
        info = @Info(
                title = "Giveus API Document",
                description = "SSAFY 10th 특화 C206",
                version = "v1.0",
                contact = @Contact(name = "seojihyeon", email = "seojihyeon99@naver.com")),
        tags = {
                @Tag(name = "01.User", description = "유저 기능"),
                @Tag(name = "02.Auth", description = "인증 기능")
        }
)

@SecurityRequirement(name = "JWT")
@SecurityScheme(
        name = "JWT",
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        scheme = "bearer"
)

@Configuration
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
                .group("controller")
                .pathsToMatch("/api/**")
                .build();
    }

    public static final String SECURITY_SCHEMA_NAME = "JWT";
    public static final String AUTHORIZATION_SCOPE_GLOBAL = "global";
    public static final String AUTHORIZATION_SCOPE_GLOBAL_DESC = "accessEverything";

}
