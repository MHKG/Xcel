package com.example;

import com.example.entity.Customer;
import com.example.entity.Flight;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Scanner;

// FlightSearchService class to handle flight search and booking
class FlightSearchService {
	private final List<Flight> flights; // Dummy flight data (replace with database access)

	public FlightSearchService() {
		flights = new ArrayList<>();
		flights.add(new Flight("FL001", "New York", "Los Angeles", "10:00 AM", 100, 250.0, "2024-04-04"));
		flights.add(new Flight("FL002", "New York", "Chicago", "11:00 AM", 50, 150.0, "2024-04-04"));
	}

	// Method to search for available flights based on user input
	public List<Flight> searchFlights(String departureLocation, String destination, String date, int seatsRequired) {
		List<Flight> availableFlights = new ArrayList<>();

		// Logic to filter flights based on user input
		for (Flight flight : flights) {
			if (flight.getDepartureLocation().equalsIgnoreCase(departureLocation) &&
					flight.getDestination().equalsIgnoreCase(destination) &&
					flight.getAvailableSeats() >= seatsRequired && Objects.equals(flight.getDepartureDate(), date)) {
				availableFlights.add(flight);
			}
		}
		return availableFlights;
	}

	// Method to book a flight
	public boolean bookFlight(Flight flight, int seatsRequired, Customer customer) {
		if (flight.getAvailableSeats() >= seatsRequired) {
			// Reduce available seats and update database (not implemented in this example)
			flight.setAvailableSeats(flight.getAvailableSeats() - seatsRequired);
			// Perform booking operations
			System.out.println("Booking successful for flight: " + flight.getFlightNumber() + " by " + customer.getName());
			return true;
		}
		return false;
	}
}

// Main class for testing flight search and booking
public class Main {
	public static void main(String[] args) {
		FlightSearchService flightSearchService = new FlightSearchService();
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter your name: ");
		String name = sc.nextLine();
		System.out.print("Enter your email: ");
		String email = sc.nextLine();
		System.out.print("Enter your age: ");
		int age = sc.nextInt();
		Customer customer = new Customer(name, email, age);
		System.out.print("Enter the location from where you want to book flight: ");
		String departureLocation = sc.nextLine();
		System.out.print("Enter the location where you want to go: ");
		String destination = sc.nextLine();
		System.out.print("Enter date (YYYY-MM-DD): ");
		String date = sc.nextLine();
		int seatsRequired = 1;
		List<Flight> availableFlights = flightSearchService.searchFlights(departureLocation, destination, date, seatsRequired);

		if (availableFlights.isEmpty()) {
			System.out.println("No flights available for the given criteria.");
		} else {
			System.out.println("Available flights:");
			for (Flight flight : availableFlights) {
				System.out.println(flight.getFlightNumber() + " - " + flight.getDepartureTime() + " - " + flight.getFare());
			}

			// Example booking: Book the first available flight
			Flight selectedFlight = availableFlights.get(0);
			int seatsToBook = 1;
			System.out.println("Do you want to book this flight?");
			String bool = sc.nextLine();
			boolean isBookingSuccessful = false;
			if(bool.equalsIgnoreCase("yes")){
				isBookingSuccessful = flightSearchService.bookFlight(selectedFlight, seatsToBook, customer);
			}
			if (isBookingSuccessful) {
				System.out.println("Booking successful for flight: " + selectedFlight.getFlightNumber());
			} else {
				System.out.println("Booking failed. No seats available for the selected flight.");
			}
		}
	}
}