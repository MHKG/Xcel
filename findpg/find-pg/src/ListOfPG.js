import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row, Dropdown } from "react-bootstrap";
import Header from "./Header";
import SearchBar from "./SearchBar";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./css/ListOfPG.css";
import Food from "./images/Food.png";
import PowerBackup from "./images/PowerBackup.png";
import Wifi from "./images/Wifi.png";
import Parking from "./images/Parking.png";
import AttachedWashroom from "./images/AttachedWashroom.png";
import AC from "./images/AC.png";
import WashingMachine from "./images/WashingMachine.png";
import SortIcon from "./images/SortIcon.png";

export default function ListOfPG({ show }) {
	const [pgType, setPgType] = useState("");
	const [sharingType, setSharingType] = useState("");
	const [budget, setBudget] = useState({ min: 0, max: 10000 });
	const [amenities, setAmenities] = useState([]);

	useEffect(() => {
		setBudget({
			min: Math.min(budget.min, budget.max),
			max: Math.max(budget.min, budget.max),
		});
	}, [budget.min, budget.max]);

	const handlePgTypeChange = (type) => {
		setPgType(type);
	};

	const handleSharingTypeChange = (type) => {
		setSharingType(type);
	};

	const handleMinBudgetChange = (e) => {
		const newMinBudget = parseInt(e.target.value) || 0;
		setBudget({ ...budget, min: newMinBudget });
	};

	const handleMaxBudgetChange = (e) => {
		const newMaxBudget = parseInt(e.target.value) || 0;
		setBudget({ ...budget, max: newMaxBudget });
	};

	const handleBudgetChange = (value) => {
		setBudget(value);
	};

	const handleAmenitiesChange = (value) => {
		if (amenities.includes(value)) {
			setAmenities(amenities.filter((amenity) => amenity !== value));
		} else {
			setAmenities([...amenities, value]);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", {
			pgType,
			sharingType,
			budget,
			amenities,
		});
	};

	return (
		<>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
			</style>
			<div className="listOfPG">
				<div className="header">
					<Header />
				</div>
				<div className="searchBar2">
					<SearchBar />
				</div>

				<div
					style={{
						boxSizing: "border-box",
						position: "absolute",
						width: "440px",
						height: "788px",
						left: "284px",
						top: "160px",
						background: "#FFFFFF",
						border: "1.5px solid #EBEDF0",
						borderRadius: "20px",
						padding: "20px",
					}}
				>
					<Form onSubmit={handleSubmit}>
						<legend>Apply Filters</legend>
						<Form.Group className="mb-3" controlId="formPgType">
							<Form.Label
								column
								sm="4"
								className="filterLabel"
								style={{ top: "75px" }}
							>
								PG Type
							</Form.Label>
							<Row
								sm="8"
								style={{ position: "absolute", top: "123px" }}
							>
								<Button
									variant={
										pgType === "boys"
											? "primary"
											: "outline-primary"
									}
									onClick={() => handlePgTypeChange("boys")}
									className="me-2 mb-2 pgType"
								>
									Boys
								</Button>
								<Button
									variant={
										pgType === "girls"
											? "primary"
											: "outline-primary"
									}
									onClick={() => handlePgTypeChange("girls")}
									className="me-2 mb-2 pgType"
								>
									Girls
								</Button>
								<Button
									variant={
										pgType === "coed"
											? "primary"
											: "outline-primary"
									}
									onClick={() => handlePgTypeChange("coed")}
									className="mb-2 pgType"
								>
									Coed
								</Button>
							</Row>
						</Form.Group>

						<hr className="lineBreaker" style={{ top: "183px" }} />

						<Form.Group
							className="mb-3"
							controlId="formSharingType"
						>
							<Form.Label
								column
								sm="4"
								className="filterLabel"
								style={{ top: "207px" }}
							>
								Sharing Type
							</Form.Label>
							<Row
								sm="8"
								style={{ position: "absolute", top: "255px" }}
							>
								<Button
									variant={
										sharingType === "single"
											? "primary"
											: "outline-primary"
									}
									onClick={() =>
										handleSharingTypeChange("single")
									}
									className="me-2 mb-2 sharingType"
								>
									Single Room
								</Button>
								<Button
									variant={
										sharingType === "double"
											? "primary"
											: "outline-primary"
									}
									onClick={() =>
										handleSharingTypeChange("double")
									}
									className="me-2 mb-2 sharingType"
								>
									2 Sharing
								</Button>
								<Button
									variant={
										sharingType === "triple"
											? "primary"
											: "outline-primary"
									}
									onClick={() =>
										handleSharingTypeChange("triple")
									}
									className="mb-2 sharingType"
								>
									3 Sharing
								</Button>
								<Button
									variant={
										sharingType === "four"
											? "primary"
											: "outline-primary"
									}
									onClick={() =>
										handleSharingTypeChange("four")
									}
									className="mb-2 sharingType"
								>
									4 Sharing
								</Button>
							</Row>
						</Form.Group>

						<hr className="lineBreaker" style={{ top: "355px" }} />

						<Form.Group className="mb-3" controlId="formBudget">
							<Form.Label
								column
								sm="4"
								className="filterLabel"
								style={{ top: "379px" }}
							>
								Budget
							</Form.Label>
							<Col
								sm="8"
								style={{ position: "absolute", top: "435px" }}
							>
								<InputRange
									maxValue={40000}
									minValue={0}
									value={budget}
									onChange={handleBudgetChange}
								/>
								<div className="d-flex justify-content-between mt-2">
									<Form.Control
										type="number"
										placeholder="Min"
										value={budget.min}
										onChange={handleMinBudgetChange}
										className="budgetInput"
									/>
									<Form.Control
										type="number"
										placeholder="Max"
										value={budget.max}
										onChange={handleMaxBudgetChange}
										className="ml-2 budgetInput"
										style={{ left: "200px" }}
									/>
								</div>
							</Col>
						</Form.Group>

						<hr className="lineBreaker" style={{ top: "515px" }} />

						<Form.Group className="mb-3" controlId="formAmenities">
							<Form.Label
								column
								sm="4"
								className="filterLabel"
								style={{ top: "539px" }}
							>
								Amenities
							</Form.Label>
							<Col sm="8">
								<Row
									sm="8"
									style={{
										position: "absolute",
										top: "587px",
										gap: "8px",
									}}
								>
									<Col
										sm="8"
										style={{ display: "flex", gap: "8px" }}
									>
										<Button
											variant={
												amenities.includes("food")
													? "primary"
													: "outline-primary"
											}
											onClick={() =>
												handleAmenitiesChange("food")
											}
											className="mb-2 amenitiesButton"
											style={{ width: "86px" }}
										>
											<img src={Food} alt="Food" />
											Food
										</Button>
										<Button
											variant={
												amenities.includes(
													"power_backup"
												)
													? "primary"
													: "outline-primary"
											}
											onClick={() =>
												handleAmenitiesChange(
													"power_backup"
												)
											}
											className="mb-2 amenitiesButton"
											style={{ width: "155px" }}
										>
											<img
												src={PowerBackup}
												alt="Power Backup"
											/>
											Power Backup
										</Button>
										<Button
											variant={
												amenities.includes("wifi")
													? "primary"
													: "outline-primary"
											}
											onClick={() =>
												handleAmenitiesChange("wifi")
											}
											className="mb-2 amenitiesButton"
											style={{ width: "82px" }}
										>
											<img src={Wifi} alt="Wifi" />
											Wifi
										</Button>
									</Col>
									<Col
										sm="8"
										style={{ display: "flex", gap: "8px" }}
									>
										<Button
											variant={
												amenities.includes("parking")
													? "primary"
													: "outline-primary"
											}
											onClick={() =>
												handleAmenitiesChange("parking")
											}
											className="mb-2 amenitiesButton"
											style={{ width: "105px" }}
										>
											<img src={Parking} alt="Parking" />
											Parking
										</Button>
										<Button
											variant={
												amenities.includes(
													"attached_washroom"
												)
													? "primary"
													: "outline-primary"
											}
											onClick={() =>
												handleAmenitiesChange(
													"attached_washroom"
												)
											}
											className="mb-2 amenitiesButton"
											style={{ width: "201px" }}
										>
											<img
												src={AttachedWashroom}
												alt="Attached Washroom"
											/>
											Attached Washroom
										</Button>
									</Col>
									<Col
										sm="10"
										style={{ display: "flex", gap: "8px" }}
									>
										<Button
											variant={
												amenities.includes("ac")
													? "primary"
													: "outline-primary"
											}
											onClick={() =>
												handleAmenitiesChange("ac")
											}
											className="mb-2 amenitiesButton"
											style={{ width: "169px" }}
										>
											<img src={AC} alt="AC" />
											Air Conditioner
										</Button>
										<Button
											variant={
												amenities.includes(
													"washing_machine"
												)
													? "primary"
													: "outline-primary"
											}
											onClick={() =>
												handleAmenitiesChange(
													"washing_machine"
												)
											}
											className="mb-2 amenitiesButton"
											style={{ width: "180px" }}
										>
											<img
												src={WashingMachine}
												alt="Washing Machine"
											/>
											Washing Machine
										</Button>
									</Col>
								</Row>
							</Col>
						</Form.Group>
					</Form>
				</div>

				<div className="totalResults">
					<p className="results">Results Showing:</p>
					<Dropdown className="sort">
						<Dropdown.Toggle
							variant="primary"
							id="dropdown-basic"
							className="custom-dropdown-toggle"
						>
							<img
								src={SortIcon}
								className="sortIcon"
								alt="Sort Icon"
							/>
							<p className="sortText">Sort By</p>
							<span className="caret"></span>
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">
								Action 1
							</Dropdown.Item>
							<Dropdown.Item href="#/action-2">
								Action 2
							</Dropdown.Item>
							<Dropdown.Item href="#/action-3">
								Action 3
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</>
	);
}
