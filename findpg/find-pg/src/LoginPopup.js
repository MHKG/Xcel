import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/LoginPopup.css";
import FlagIcon from "react-world-flags";

function LoginPopup({ show, onHide, onContinue }) {
	const [country, setCountry] = useState("IN");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const generateOtp = () => {
		return Math.floor(1000 + Math.random() * 9000).toString();
	};

	const handleContinue = () => {
		const phoneRegex = /^(\+91)?[6789]\d{9}$/;

		if (!phoneRegex.test(phoneNumber)) {
			setErrorMessage("Invalid Phone Number.");
			return;
		}

		const otp = generateOtp();
		alert(
			`Phone number registered successfully, please use ${otp} as OTP to continue`
		);
		onContinue(phoneNumber, otp);
	};

	return (
		<>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
			</style>
			<Modal show={show} onHide={onHide} centered>
				<Modal.Header closeButton>
					<Modal.Title>Login/Register</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group className="mb-3">
						<Form.Select
							value={country}
							onChange={(e) => setCountry(e.target.value)}
							className="countryCode"
						>
							<option
								value="IN"
								style={{
									backgroundImage: `url(${FlagIcon["IN"]})`,
									backgroundSize: "20px 15px",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "3px",
								}}
							>
								+91 (India)
							</option>
							<option
								value="US"
								style={{
									backgroundImage: `url(${FlagIcon["US"]})`,
									backgroundSize: "20px 15px",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "3px",
								}}
							>
								+1 (United States)
							</option>
							<option
								value="GB"
								style={{
									backgroundImage: `url(${FlagIcon["GB"]})`,
									backgroundSize: "20px 15px",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "3px",
								}}
							>
								+44 (United Kingdom)
							</option>
						</Form.Select>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label className="enterNumber" id="enterNumber">
							Enter Phone Number
						</Form.Label>
						<Form.Control
							type="number"
							placeholder="Enter your phone number"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							className="phoneNumber"
						/>
					</Form.Group>
					{errorMessage && (
						<div className="text-danger mb-3">{errorMessage}</div>
					)}
					<Button
						variant="primary"
						onClick={handleContinue}
						className="continue"
					>
						Continue
					</Button>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default LoginPopup;
