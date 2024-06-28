import React, { useEffect, useRef, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/CreateAccount.css";
import Pencil from "./images/Pencil.png";
import axios from "axios";
import AccountCreated from "./AccountCreated";
import uploadImage from "./images/uploadImage.png";

export default function CreateAccount({ show, onHide, params }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState(params);
	const [address, setAddress] = useState("");
	const [languages, setLanguages] = useState([]);
	const [editEnabled, setEditEnabled] = useState(false);
	const [accountCreated, setAccountCreated] = useState(false);
	const [errorMessageEmail, setErrorMessageEmail] = useState("");
	const [errorMessagePhone, setErrorMessagePhone] = useState("");
	const [imageSrc, setImageSrc] = useState(
		localStorage.getItem("imageSrc") || uploadImage
	);
	const fileInputRef = useRef(null);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		setPhoneNumber(params);
		let image = axios.get("http://localhost:8080/image_controller/getAll");
	});

	const submit = async () => {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const phoneRegex = /^(\+91)?[6789]\d{9}$/;

		if (!emailRegex.test(email)) {
			setErrorMessageEmail("Invalid Email Id.");
			return;
		}

		if (!phoneRegex.test(phoneNumber)) {
			setErrorMessagePhone("Invalid Phone Number.");
			return;
		}

		let responseImage = await axios.post(
			"http://localhost:8080/image_controller/add",
			{
				image: imageSrc,
			}
		);

		let responseUser = await axios.post(
			"http://localhost:8080/user_controller/add",
			{
				name: name,
				email: email,
				phone_number: phoneNumber,
				address: address,
				languages: languages,
			}
		);

		if (responseUser.data.success) {
			onHide();
			setAccountCreated(true);
		} else {
			alert("Saving failed. Please try again.");
		}
	};

	const editNumber = () => {
		setEditEnabled(true);
	};

	const handleImageClick = () => {
		fileInputRef.current.click();
	};

	const changeImg = (e) => {
		const file = e.target.files[0];
		if (file) {
			if (file.type.startsWith("image/")) {
				const imageUrl = URL.createObjectURL(file);
				setImageSrc(imageUrl);
				localStorage.setItem("imageSrc", imageUrl);
				setErrorMessage("");
			} else {
				setErrorMessage("Please upload a valid image file.");
			}
		}
	};

	return (
		<>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
			</style>
			<Modal
				show={show}
				onHide={onHide}
				centered
				className="custom-modal"
			>
				<Modal.Header closeButton className="custom-modal-header">
					<Modal.Title className="custom-modal-title">
						Create Your Account
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="modalContent">
					{errorMessage && (
						<p className="error-message">{errorMessage}</p>
					)}
					<div className="row">
						<img
							src={imageSrc}
							className="uploadImage col-4"
							alt="uploadImage"
							onClick={handleImageClick}
						/>
						<p className="uploadImgText col-8">
							Upload an image or a logo
						</p>
					</div>
					<input
						type="file"
						accept="image/*"
						onChange={changeImg}
						ref={fileInputRef}
						style={{ display: "none" }}
					/>
					<Form.Group
						controlId="formCustomInput"
						className="inputGroup"
						style={{ top: "20px" }}
					>
						<Form.Label className="label">Name</Form.Label>
						<Form.Control
							type="text"
							placeholder=""
							className="input"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Form.Group>
					{errorMessageEmail && (
						<div className="text-danger">{errorMessageEmail}</div>
					)}
					<Form.Group
						controlId="formCustomInput"
						className="inputGroup"
						style={{ top: "40px" }}
					>
						<Form.Label className="label">Email</Form.Label>
						<Form.Control
							type="email"
							placeholder=""
							className="input"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					{errorMessagePhone && (
						<div className="text-danger mb-3">
							{errorMessagePhone}
						</div>
					)}
					<Form.Group
						controlId="formCustomInput"
						className="inputGroup"
						style={{ top: "60px" }}
					>
						<Form.Label className="label">Phone Number</Form.Label>
						<Form.Control
							type="text"
							placeholder=""
							className="input"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							disabled={!editEnabled}
							style={{ paddingLeft: "130px" }}
						/>
						<Button
							variant="secondary"
							className="editNumberButton"
							onClick={editNumber}
							style={{ marginTop: "10px" }}
						>
							<span className="editNumberText">Edit Number</span>
							<img
								src={Pencil}
								className="editNumberPencil"
								alt="pencil"
								onClick={editNumber}
							/>
						</Button>
					</Form.Group>
					<Form.Group
						controlId="formCustomInput"
						className="inputGroup"
						style={{ top: "100px" }}
					>
						<Form.Label className="label">Address</Form.Label>
						<Form.Control
							type="text"
							placeholder=""
							className="input"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</Form.Group>
					<Form.Group
						controlId="formCustomInput"
						className="inputGroup"
						style={{ top: "120px" }}
					>
						<Form.Label className="label">Languages</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter languages separated by commas"
							className="input"
							value={languages.join(", ")}
							onChange={(e) =>
								setLanguages(
									e.target.value
										.split(", ")
										.map((lang) => lang.trim())
								)
							}
						/>
					</Form.Group>

					<Button
						variant="primary"
						className="createAccount"
						onClick={submit}
					>
						Create Account
					</Button>
				</Modal.Body>
			</Modal>

			{accountCreated && (
				<AccountCreated
					show={accountCreated}
					onHide={() => setAccountCreated(false)}
				/>
			)}
		</>
	);
}
