package com.giveus.funding.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import lombok.extern.slf4j.Slf4j;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
        info = @Info(
                title = "GIVEUS 펀딩 API 명세서",
                description = "C206",
                version = "1.0.0",
                contact = @Contact(name = "giveus", email = "giveus2024@gmail.com"))
)
@Configuration
@Slf4j
public class SwaggerConfig {
    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
                .group("API")
                .packagesToScan("com.giveus.funding.controller")
                .build();
    }

}
