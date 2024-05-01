package com.example.controller;

import com.example.dto.FlightDTO;
import com.example.serivce.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FlightController {

	private final FlightService flightService;

	@Autowired
	public FlightController(FlightService flightService) {
		this.flightService = flightService;
	}

	@GetMapping("/flights")
	public List<FlightDTO> searchFlights(
			@RequestParam String departureLocation,
			@RequestParam String destination,
			@RequestParam String date,
			@RequestParam int seatsRequired) {
		return flightService.searchFlights(departureLocation, destination, date, seatsRequired);
	}
}
