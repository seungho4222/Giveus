package com.giveus.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class BackendAdminApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendAdminApplication.class, args);
	}

}
