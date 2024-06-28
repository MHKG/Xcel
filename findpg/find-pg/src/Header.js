import React, { useState } from "react";
import LogoPeace from "./images/LOGO Peace.png";
import UserIcon from "./images/User Icon.png";
import HambungIcon from "./images/Hambung Icon.png";
import "./css/Header.css";
import LoginSidebar from "./LoginSidebar";
import LoginPopup from "./LoginPopup";
import OtpPopup from "./OtpPopup";

function Header() {
	const [sidebar, setSidebar] = useState(false);
	const [popup, setPopup] = useState(false);
	const [otpPopup, setOtpPopup] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [generatedOtp, setGeneratedOtp] = useState("");

	const loginPopup = () => {
		setPopup(true);
	};

	const loginSidebar = () => {
		setSidebar(true);
	};

	const handleOtpPopup = (phoneNumber, otp) => {
		setPhoneNumber(phoneNumber);
		setGeneratedOtp(otp);
		setOtpPopup(true);
		setPopup(false);
	};

	const handleLoginPopup = () => {
		setPopup(true);
		setOtpPopup(false);
	};

	return (
		<>
			<img alt="Peace Logo" src={LogoPeace} className="peaceIcon" />

			<div className="login">
				<img
					src={UserIcon}
					className="icons"
					style={{ left: "16px" }}
					alt="User Icon"
					onClick={loginPopup}
				/>
				<img
					src={HambungIcon}
					className="icons"
					style={{ left: "52px" }}
					alt="Hambung Icon"
					onClick={loginSidebar}
				/>
			</div>

			<LoginSidebar show={sidebar} onHide={() => setSidebar(false)} />
			<LoginPopup
				show={popup}
				onHide={() => setPopup(false)}
				onContinue={handleOtpPopup}
			/>
			<OtpPopup
				show={otpPopup}
				onHide={() => setOtpPopup(false)}
				params={{ phoneNumber, generatedOtp }}
				onBackToLogin={handleLoginPopup}
			/>
		</>
	);
}

export default Header;
