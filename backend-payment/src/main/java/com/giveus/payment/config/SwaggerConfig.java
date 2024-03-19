package com.giveus.payment.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
        info = @Info(
                title = "Giveus 결제 API 명세서",
                description = "C206",
                version = "1.0.0",
                contact = @Contact(name = "giveus", email = "giveus2024@gmail.com")
        )
)
@Configuration
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
                .group("Payment")
                .packagesToScan("com.giveus.payment.controller")
                .build();
    }
}
