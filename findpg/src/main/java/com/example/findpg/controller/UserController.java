package com.example.findpg.controller;

import com.example.findpg.entity.User;
import com.example.findpg.service.AddUser;
import com.example.findpg.genericactionresponse.GenericActionResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/user_controller")
public class UserController {

	@Autowired
	private AddUser addUser;

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	private GenericActionResponse<User> add(@RequestBody User user) {
		boolean isAdded = false;
		GenericActionResponse<User> response = new GenericActionResponse<>(false);

		List<User> allUsers = addUser.getByPhoneNumber(user.getPhone_number());

		if(allUsers.isEmpty()) {
			isAdded = addUser.add(user.getName(), user.getEmail(), user.getPhone_number(), user.getAddress(), user.getLanguages(), user.getImage_id());
		}

		if (isAdded) {
			response.setSuccess(true);
		} else {
			response.setErrmsg("Failed");
		}
		return response;
	}

	@RequestMapping(value = "/getAll", method = RequestMethod.GET)
	private List<User> getAll() {
		return addUser.getAll();
	}
}
