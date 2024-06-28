import React, { useState, useRef, useEffect } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/OtpPopup.css";
import Pencil from "./images/Pencil.png";
import CreateAccount from "./CreateAccount";

function OtpPopup({ show, onHide, params, onBackToLogin }) {
	const [otp, setOtp] = useState(["", "", "", ""]);
	const [error, setError] = useState("");
	const inputRefs = useRef([]);
	const [resendEnabled, setResendEnabled] = useState(false);
	const [timer, setTimer] = useState(30);
	const [createAccountPopup, setCreateAccountPopup] = useState(false);

	useEffect(() => {
		if (show) {
			setTimer(30);
			setResendEnabled(false);
		}
	}, [show]);

	useEffect(() => {
		if (timer > 0) {
			const interval = setInterval(() => {
				setTimer((prev) => prev - 1);
			}, 1000);
			return () => clearInterval(interval);
		} else {
			setResendEnabled(true);
		}
	}, [timer]);

	const goBackToLoginPopup = () => {
		onHide();
		onBackToLogin();
	};

	const handleChange = (index, value) => {
		let newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);

		if (value && index < 3) {
			inputRefs.current[index + 1].focus();
		}
	};

	const submit = () => {
		const enteredOtp = otp.join("");
		const correctOtp = params.generatedOtp;

		if (enteredOtp === correctOtp) {
			onHide();
			setCreateAccountPopup(true);
		} else {
			setError("Incorrect OTP, please try again.");
		}
	};

	const resendOtp = () => {
		const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
		alert(`New OTP is: ${newOtp}`);
		params.generatedOtp = newOtp;
		setOtp(["", "", "", ""]);
		setTimer(30);
		setResendEnabled(false);
		inputRefs.current[0].focus();
	};

	return (
		<>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
			</style>
			<Modal show={show} onHide={onHide} centered>
				<Modal.Header closeButton>
					<Modal.Title>Enter OTP</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form.Group className="mb-3">
						<Form.Label
							className="enterNumber"
							style={{ left: "24px" }}
						>
							OTP sent to{" "}
							<b className="numberBold">{params.phoneNumber}</b>
							<img
								src={Pencil}
								className="pencil"
								alt="pencil"
								onClick={goBackToLoginPopup}
							/>
						</Form.Label>
					</Form.Group>
					<Form.Group className="mb-3">
						{[0, 1, 2, 3].map((index) => (
							<Form.Control
								key={index}
								type="text"
								className="otpBox"
								value={otp[index]}
								onChange={(e) =>
									handleChange(index, e.target.value)
								}
								ref={(el) => (inputRefs.current[index] = el)}
								maxLength={1}
								style={{
									left: `${24 + index * 90}px`,
								}}
							/>
						))}
					</Form.Group>
					<Button
						variant="secondary"
						className="resend"
						onClick={resendOtp}
						disabled={!resendEnabled}
						style={{ marginTop: "10px" }}
					>
						Resend OTP {resendEnabled ? "" : `in ${timer}s`}
					</Button>
					<Button
						variant="primary"
						className="continue"
						onClick={submit}
					>
						Submit
					</Button>
				</Modal.Body>
			</Modal>

			<CreateAccount
				show={createAccountPopup}
				onHide={() => setCreateAccountPopup(false)}
				params={params.phoneNumber}
			/>
		</>
	);
}

export default OtpPopup;
