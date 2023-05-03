package com.teamtrack.teamtrackbackend;

import com.teamtrack.teamtrackbackend.user.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;


@SpringBootApplication
public class TeamtrackbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TeamtrackbackendApplication.class, args);
	}
	@Bean
	public CommandLineRunner init(UserRepository userRepository) {
		return args -> {
			userRepository.findAll().forEach(System.out::println);
		};
	}
}
