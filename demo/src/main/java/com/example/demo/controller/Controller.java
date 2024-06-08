package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.AddUser;
import jakarta.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Method;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(value = "/controller")
public class Controller {

	@Autowired
	private AddUser addUser;

	@PostMapping("/save")
	private ResponseEntity<?> addUser(
			@RequestBody User user) {
		boolean isAdded = addUser.add(user.getName(), user.getEmail(), user.getAge(), user.getPhone_number());

		if (isAdded) {
			return ResponseEntity.ok(Collections.singletonMap("success", true));
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT)
					.body(Collections.singletonMap("success", false));
		}
	}

	@GetMapping("/getAll")
	private List<User> getAll() {
		return addUser.getAll();
	}
}
