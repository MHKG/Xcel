import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UserForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [age, setAge] = useState("");
	const [phone_number, setPhone] = useState("");
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const fetchInfo = async () => {
		return axios
			.get("http://localhost:8080/user_controller/getAll")
			.then((res) => setData(res.data));
	};

	useEffect(() => {
		fetchInfo();
	}, []);

	const save = async () => {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const phoneRegex = /^(\+91)?[6789]\d{9}$/;
		if (!emailRegex.test(email)) {
			alert("Invalid Email Id.");
			return;
		}

		if (!phoneRegex.test(phone_number)) {
			alert("Invalid Phone Number.");
			return;
		}
		setLoading(true);
		try {
			const response = await axios.post(
				"http://localhost:8080/user_controller/add",
				{
					name,
					email,
					age: parseInt(age),
					phone_number,
				}
			);

			if (response.data.success) {
				alert("Saving successful!");
			} else {
				alert("Saving failed. Please try again.");
			}
		} catch (error) {
			console.log("An error occured: ", error);
		}
		setLoading(false);
		navigate("/thankyou");
	};

	return (
		<Container className="mt-5">
			<Row>
				<Col md={6}>
					<Form>
						<Form.Group controlId="formName">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Enter Your Name"
							/>
						</Form.Group>

						<Form.Group controlId="formEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter Your Email"
							/>
						</Form.Group>

						<Form.Group controlId="formAge">
							<Form.Label>Age</Form.Label>
							<Form.Control
								type="number"
								value={age}
								onChange={(e) => setAge(e.target.value)}
								placeholder="Enter Your Age"
							/>
						</Form.Group>

						<Form.Group controlId="formPhoneNumber">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control
								type="text"
								value={phone_number}
								onChange={(e) => setPhone(e.target.value)}
								placeholder="Enter Your Phone Number"
							/>
						</Form.Group>

						<Button
							variant="primary"
							onClick={save}
							disabled={loading}
							style={{ marginTop: "20px" }}
						>
							{loading ? "Saving..." : "Save"}
						</Button>
					</Form>
				</Col>

				<Col md={6}>
					<h1 className="mt-5">List of people already added:</h1>
					<Row style={{ marginTop: "20px" }}>
						{data.map((dataObj, index) => (
							<Col key={index} md={12} className="mb-4">
								<Card bg="success" text="white">
									<Card.Body>
										<Card.Text>{dataObj[1]}</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default UserForm;
