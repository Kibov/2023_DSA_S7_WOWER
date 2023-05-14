package com.teamtrack.teamtrackbackend;

import com.teamtrack.teamtrackbackend.project.Project;
import com.teamtrack.teamtrackbackend.project.ProjectRepository;
import com.teamtrack.teamtrackbackend.user.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;


@SpringBootApplication
public class TeamtrackbackendApplication {


	public static void main(String[] args) {
		SpringApplication.run(TeamtrackbackendApplication.class, args);
	}


	@Bean
	public CommandLineRunner init(UserRepository userRepository, ProjectRepository projectRepository) {
		return args -> {
			userRepository.findAll().forEach(user -> {
				List<Project> projects = projectRepository.findByUserId(user.getId());
				System.out.println("Projects for user " + user.getUsername() + ":");
				projects.forEach(System.out::println);
				System.out.println();
			});
		};
	}
}
