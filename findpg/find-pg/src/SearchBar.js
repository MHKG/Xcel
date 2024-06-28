import { Button, Form, FormControl } from "react-bootstrap";
import Find from "./images/Find.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./css/SearchBar.css";

export default function SearchBar() {
	const [userSearchLocation, setUserSearchLocation] = useState("");
	const navigate = useNavigate();

	const searchPG = () => {
		if (userSearchLocation.length === 0) {
			alert("Please enter a location to search.");
			return;
		} else {
			navigate("/ListOfPG");
		}
	};

	return (
		<>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
			</style>
			<Form>
				<Form.Group className="mb-3">
					<div className="d-flex align-items-center">
						<FormControl
							type="text"
							value={userSearchLocation}
							placeholder="Search Locality"
							className="searchBar"
							onChange={(e) =>
								setUserSearchLocation(e.target.value)
							}
						/>
						<img src={Find} className="find" alt="Locate Icon" />
						<Button
							variant="primary"
							className="searchBtn"
							onClick={searchPG}
						>
							<svg
								className="searchIcon"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"
									fill="white"
								/>
							</svg>
							<span className="searchText">Search</span>
						</Button>
					</div>
				</Form.Group>
			</Form>
		</>
	);
}
