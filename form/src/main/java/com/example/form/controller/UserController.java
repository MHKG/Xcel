package com.example.form.controller;

import com.example.form.entity.User;
import com.example.form.service.AddUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(value = "/user_controller")
public class UserController {

	@Autowired
	private AddUser addUser;

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	private ResponseEntity<?> add(
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
