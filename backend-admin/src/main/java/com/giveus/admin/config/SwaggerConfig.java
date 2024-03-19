package com.giveus.admin.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import lombok.extern.slf4j.Slf4j;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
//        servers = {
////                @Server(url = "https://i10c111.p.ssafy.io", description = "배포 서버 API"),
//                @Server(url = "http://localhost:8083", description = "로컬 API"),
//        },
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
//                .pathsToMatch("/api/**")
                .build();
    }
//    @Value("${springdoc.swagger-ui.config-url}")
//    private String server;
//    @Bean
//    public OpenAPI openAPI() {
//        log.info(server);
//        return new OpenAPI()
////                .components(new Components())
//                .info(apiInfo())
////                .servers(List.of(server()))
//                ;
//    }
//
//    private Info apiInfo() {
//        return new Info()
//                .title("GIVEUS 펀딩 API 명세서")
//                .description("C206")
//                .version("1.0.0");
//    }
//
//    private Server server() {
//        return new Server()
//                .url(server)
//                .description("로컬 API");
//
//    }

}
