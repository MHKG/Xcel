package com.example.findpg.controller;

import com.example.findpg.entity.PG;
import com.example.findpg.service.AddPG;
import com.example.findpg.genericactionresponse.GenericActionResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/pg_controller")
public class PGController {

	@Autowired
	private AddPG addPG;

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	private GenericActionResponse<PG> add(
			@RequestBody PG pg) {
		GenericActionResponse<PG> response = new GenericActionResponse<>(false);

		boolean isAdded = addPG.add(pg);

		if (isAdded) {
			response.setSuccess(true);
			return response;
		} else {
			response.setSuccess(false);
			response.setErrmsg("Failed");
			return response;
		}
	}

	@RequestMapping(value = "/getAll", method = RequestMethod.GET)
	private List<PG> getAll() {
		return addPG.getAll();
	}
}
