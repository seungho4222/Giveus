package com.giveus.funding.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
        servers = {
                @Server(url = "https://i10c111.p.ssafy.io", description = "배포 서버 API"),
                @Server(url = "http://localhost:8080", description = "로컬 API"),
        },
        info = @Info(
                title = "Pawsitive API Document",
                description = "SSAFY 10th C111",
                version = "v1.4",
                contact = @Contact(name = "yihoney", email = "109622@naver.com")),
        tags = {
                @Tag(name = "01.User", description = "유저 기능"),
        }
)

@Configuration
@RequiredArgsConstructor
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
                .group("controller")
                .pathsToMatch("/api/**")
                .build();
    }


}
