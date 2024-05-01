package com.example.entity;

public class Flight {
	private String flightNumber;
	private String departureLocation;
	private String destination;
	private String departureTime;
	private int availableSeats;
	private double fare;
	private String departureDate;

	// Constructor, getters, and setters
	public Flight(String flightNumber, String departureLocation, String destination, String departureTime, int availableSeats, double fare, String departureDate) {
		this.flightNumber = flightNumber;
		this.departureLocation = departureLocation;
		this.destination = destination;
		this.departureTime = departureTime;
		this.availableSeats = availableSeats;
		this.fare = fare;
		this.departureDate = departureDate;
	}

	public String getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getDepartureLocation() {
		return departureLocation;
	}

	public void setDepartureLocation(String departureLocation) {
		this.departureLocation = departureLocation;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}

	public int getAvailableSeats() {
		return availableSeats;
	}

	public void setAvailableSeats(int availableSeats) {
		this.availableSeats = availableSeats;
	}

	public double getFare() {
		return fare;
	}

	public void setFare(double fare) {
		this.fare = fare;
	}

	public String getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(String departureDate) {
		this.departureDate = departureDate;
	}
}