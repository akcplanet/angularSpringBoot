package com.fail.trade;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"com.fail.trade.controller"})
public class FailTradeServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(FailTradeServerApplication.class, args);
	}
}
