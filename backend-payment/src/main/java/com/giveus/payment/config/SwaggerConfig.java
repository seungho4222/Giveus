package com.giveus.payment.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
        servers = {
                @Server(url = "https://j10c206.p.ssafy.io", description = "배포 Payment 서버 API"),
                @Server(url = "http://localhost:8084", description = "로컬 Payment 서버 API")
        },
        info = @Info(
                title = "Giveus API Document",
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
