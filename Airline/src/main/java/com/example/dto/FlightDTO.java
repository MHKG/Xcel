package com.example.dto;

import com.example.entity.Flight;

public class FlightDTO {

	private final String flightNumber;
	private final String departureTime;
	private final double fare;

	public FlightDTO(Flight flight) {
		this.flightNumber = flight.getFlightNumber();
		this.departureTime = flight.getDepartureTime();
		this.fare = flight.getFare();
	}

	// Getters
	public String getFlightNumber() {
		return flightNumber;
	}

	public String getDepartureTime() {
		return departureTime;
	}

	public double getFare() {
		return fare;
	}
}
