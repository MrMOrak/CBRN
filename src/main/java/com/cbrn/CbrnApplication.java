package com.cbrn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.cbrn.entity.*")
public class CbrnApplication {

	public static void main(String[] args) {
		SpringApplication.run(CbrnApplication.class, args);
	}

}
