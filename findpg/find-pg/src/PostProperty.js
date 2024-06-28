import { useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import "./css/PostProperty.css";
import axios from "axios";

export default function PostProperty({ show, onHide }) {
	const [name, setName] = useState("");
	const [type, setType] = useState("Coed");
	const [location, setLocation] = useState("");
	const [description, setDescription] = useState("");
	const [deposit, setDeposit] = useState("");
	const [noticePeriod, setNoticePeriod] = useState("");
	const [maintenance, setMaintenance] = useState("");
	const [electricCharges, setElectricCharges] = useState("");
	const [ac, setAC] = useState("Available");
	const [foodAvailability, setFoodAvailability] = useState("Available");
	const [backup, setBackup] = useState("Available");
	const [parking, setParking] = useState("Available");
	const [cleaning, setCleaning] = useState("");
	const [washroom, setWashroom] = useState("Attached");
	const [errorMessage, setErrorMessage] = useState("");

	const pgDetails = async () => {
		try {
			let response = await axios.post(
				"http://localhost:8080/pg_controller/add",
				{
					pg_name: name,
					type: type,
					location: location,
					description: description,
					deposit: deposit,
					notice_period: noticePeriod,
					maintenance: maintenance,
					electric_charges: electricCharges,
					ac: ac,
					food_availability: foodAvailability,
					backup: backup,
					parking: parking,
					cleaning: cleaning,
					washroom: washroom,
				}
			);

			if(response.data.success) {
				onHide();
				
			}
		} catch (error) {
			setErrorMessage(
				"Failed to submit PG details. Please check your input."
			);
			console.error("Error submitting PG details:", error);
		}
	};

	return (
		<Modal show={show} onHide={onHide} centered className="custom-modal">
			<Modal.Header closeButton className="custom-modal-header">
				<Modal.Title className="custom-modal-title">
					Enter Your PG Details
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="custom-modal-body">
				{errorMessage && (
					<div className="text-danger">{errorMessage}</div>
				)}
				<Form>
					<Row>
						<Col md={6}>
							<Form.Group className="mb-3 custom-form-group">
								<Form.Label className="custom-form-label">
									Enter PG Name
								</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter PG Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="custom-form-control"
								/>
							</Form.Group>
							<Form.Group className="mb-3 custom-form-group">
								<Form.Label className="custom-form-label">
									Enter PG Type
								</Form.Label>
								<Form.Select
									value={type}
									onChange={(e) => setType(e.target.value)}
									className="custom-form-select"
								>
									<option value="Boys">Boys</option>
									<option value="Girls">Girls</option>
									<option value="Coed">Coed</option>
								</Form.Select>
							</Form.Group>
							<Form.Group className="mb-3 custom-form-group">
								<Form.Label className="custom-form-label">
									Enter Location
								</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter PG Location"
									value={location}
									onChange={(e) =>
										setLocation(e.target.value)
									}
									className="custom-form-control"
								/>
							</Form.Group>
							<Form.Group className="mb-3 custom-form-group">
								<Form.Label className="custom-form-label">
									Enter Description
								</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter PG Description"
									value={description}
									onChange={(e) =>
										setDescription(e.target.value)
									}
									className="custom-form-control"
								/>
							</Form.Group>
							<Form.Group className="mb-3 custom-form-group">
								<Form.Label className="custom-form-label">
									Enter AC Availability
								</Form.Label>
								<Form.Select
									value={ac}
									onChange={(e) => setAC(e.target.value)}
									className="custom-form-select"
								>
									<option value="Available">Available</option>
									<option value="Not Available">
										Not Available
									</option>
								</Form.Select>
							</Form.Group>
							<Form.Group className="mb-3 custom-form-group">
								<Form.Label className="custom-form-label">
									Enter Food Availability
								</Form.Label>
								<Form.Select
									value={foodAvailability}
									onChange={(e) =>
										setFoodAvailability(e.target.value)
									}
									className="custom-form-select"
								>
									<option value="Available">Available</option>
									<option value="Not Available">
										Not Available
									</option>
								</Form.Select>
							</Form.Group>
							<Form.Group className="mb-3 custom-form-group">
								<Form.Label className="custom-form-label">
									Enter Washroom
								</Form.Label>
								<Form.Select
									value={washroom}
									onChange={(e) =>
										setWashroom(e.target.value)
									}
									className="custom-form-select"
								>
									<option value="Attached">Attached</option>
									<option value="Not Attached">
										Not Attached
									</option>
								</Form.Select>
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group className="mb-3 custom-form-group">
								<Form.Label className="custom-form-label">
									Enter Maintenance
								</Form.Label>
								<Form.Control
									type="number"
									placeholder="Enter PG Maintenance"
									value={maintenance}
									onChange={(e) =>
										setMaintenance(e.target.value)
									}
									className="custom-form-control"
								/>
							</Form.Group>
							<Form.Group className="mb-3 custom-form-group">
								<Form.Label className="custom-form-label">
									Enter Electric Charges
								</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter PG Electric Charges"
									value={electricCharges}
									onChange={(e) =>
										setElectricCharges(e.target.value)
									}
									className="custom-form-control"
								/>
							</Form.Group>
							<Form.Group className="mb-3 custom-form-group">
								<Form.Label className="custom-form-label">
									Enter Deposit
								</Form.Label>
								<Form.Control
									type="number"
									placeholder="Enter PG Deposit"
									value={deposit}
									onChange={(e) => setDeposit(e.target.value)}
									className="custom-form-control"
								/>
							</Form.Group>
							<Form.Group className="mb-3 custom-form-group">
								<Form.Label className="custom-form-label">
									Enter Notice Period
								</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter PG Notice Period"
									value={noticePeriod}
									onChange={(e) =>
										setNoticePeriod(e.target.value)
									}
									className="custom-form-control"
								/>
							</Form.Group>
							<Form.Group className="mb-3 custom-form-group">
								<Form.Label className="custom-form-label">
									Enter Backup Availability
								</Form.Label>
								<Form.Select
									value={backup}
									onChange={(e) => setBackup(e.target.value)}
									className="custom-form-select"
								>
									<option value="Available">Available</option>
									<option value="Not Available">
										Not Available
									</option>
								</Form.Select>
							</Form.Group>
							<Form.Group className="mb-3 custom-form-group">
								<Form.Label className="custom-form-label">
									Enter Parking Availability
								</Form.Label>
								<Form.Select
									value={parking}
									onChange={(e) => setParking(e.target.value)}
									className="custom-form-select"
								>
									<option value="Available">Available</option>
									<option value="Not Available">
										Not Available
									</option>
								</Form.Select>
							</Form.Group>
							<Form.Group className="mb-3 custom-form-group">
								<Form.Label className="custom-form-label">
									Enter Cleaning Status
								</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter PG Cleaning Status"
									value={cleaning}
									onChange={(e) =>
										setCleaning(e.target.value)
									}
									className="custom-form-control"
								/>
							</Form.Group>
						</Col>
					</Row>
					<Button
						variant="primary"
						className="w-100 custom-button"
						onClick={pgDetails}
					>
						Continue
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
}
