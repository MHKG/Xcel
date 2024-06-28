import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/LoginSidebar.css";
import LoginIcon from "./images/LoginIcon.png";
import LoginPopup from "./LoginPopup";
import PostProperty from "./PostProperty";
import OtpPopup from "./OtpPopup";

function LoginSidebar({ show, onHide }) {
	const [loginPopupStatus, setLoginPopupStatus] = useState(false);
	const [postPropertyForm, setPostPropertyForm] = useState(false);
	const [otpPopup, setOtpPopup] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [generatedOtp, setGeneratedOtp] = useState("");

	const loginPopup = () => {
		setLoginPopupStatus(true);
	};

	const propertyForm = () => {
		onHide();
		setPostPropertyForm(true);
	};

	const handleOtpPopup = (phoneNumber, otp) => {
		setPhoneNumber(phoneNumber);
		setGeneratedOtp(otp);
		setOtpPopup(true);
		setLoginPopupStatus(false);
	};

	const handleLoginPopup = () => {
		setLoginPopupStatus(true);
		setOtpPopup(false);
	};

	return (
		<>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
			</style>
			<Offcanvas
				show={show}
				onHide={onHide}
				scroll
				backdrop
				placement="end"
			>
				<Offcanvas.Header closeButton />
				<Offcanvas.Body>
					<div className="loginSidebar">
						<img
							src={LoginIcon}
							className="loginIcon"
							alt="Login Icon"
						/>
						<div className="login-register">
							<p className="hi">Hi There!</p>
							<h2 className="loginButton" onClick={loginPopup}>
								Login/Register
							</h2>
						</div>

						<button className="postProperty" onClick={propertyForm}>
							Post your property
						</button>
					</div>
				</Offcanvas.Body>
			</Offcanvas>

			<LoginPopup
				show={loginPopupStatus}
				onHide={() => setLoginPopupStatus(false)}
				onContinue={handleOtpPopup}
			/>

			<OtpPopup
				show={otpPopup}
				onHide={() => setOtpPopup(false)}
				params={{ phoneNumber, generatedOtp }}
				onBackToLogin={handleLoginPopup}
			/>

			<PostProperty
				show={postPropertyForm}
				onHide={() => setPostPropertyForm(false)}
			/>
		</>
	);
}

export default LoginSidebar;
