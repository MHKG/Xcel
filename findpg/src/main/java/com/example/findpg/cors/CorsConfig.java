package com.example.findpg.cors;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

	@SuppressWarnings("null")
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
				.allowedOrigins("*") // Allow requests from any origin
				.allowedMethods("GET", "POST", "PUT", "DELETE") // Allow the HTTP methods
				.allowedHeaders("*"); // Allow all headers
	}
}
