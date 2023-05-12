package com.cbrn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.cbrn.entity")
public class CbrnApplication {

	public static void main(String[] args) {
		SpringApplication.run(CbrnApplication.class, args);
	}

}
