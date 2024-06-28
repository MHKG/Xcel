package com.example.findpg.controller;

import com.example.findpg.entity.Images;
import com.example.findpg.genericactionresponse.GenericActionResponse;
import com.example.findpg.service.AddImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/image_controller")
public class ImageController {

	@Autowired
	private AddImage addImage;

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	private GenericActionResponse<Images> add(
			@RequestBody Images image) {
		GenericActionResponse<Images> response = new GenericActionResponse<>(false);

		boolean isAdded = addImage.add(image);

		if (isAdded) {
			response.setSuccess(true);
		} else {
			response.setErrmsg("Failed");
		}
		return response;
	}

	@RequestMapping(value = "/getAll", method = RequestMethod.GET)
	private List<Images> getAll() {
		return addImage.getAll();
	}
}
