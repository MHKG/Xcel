package com.example.serivce;

import com.example.dao.FlightDAO;
import com.example.dto.FlightDTO;
import com.example.entity.Flight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FlightService {

	private final FlightDAO flightDAO;

	@Autowired
	public FlightService(FlightDAO flightDAO) {
		this.flightDAO = flightDAO;
	}

	public List<FlightDTO> searchFlights(String departureLocation, String destination, String date, int seatsRequired) {
		List<Flight> flights = flightDAO.findFlights(departureLocation, destination, date, seatsRequired);
		return flights.stream()
				.map(FlightDTO::new)
				.collect(Collectors.toList());
	}
}
