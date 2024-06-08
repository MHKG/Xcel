import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [age, setAge] = useState("");
	const [phone_number, setPhone] = useState("");
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchInfo = async () => {
		return axios.get("http://localhost:8080/controller/getAll").then((res) => setData(res.data));
	}

	useEffect(() => {
		fetchInfo();
	}, []);

	const save = async () => {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const phoneRegex = /^(\+91)?[6789]\d{9}$/;
		if(!emailRegex.test(email)) {
			alert("Invalid Email Id.");
			return;
		}

		if(!phoneRegex.test(phone_number)) {
			alert("Invalid Phone Number.");
			return;
		}
		setLoading(true);
		try {
			const response = await axios.post(
                "http://localhost:8080/controller/save",
                {
                    name,
					email,
					age: parseInt(age),
					phone_number
				}
            );

			if (response.data.success) {
                alert("Saving successful!");
            } else {
                alert("Saving failed. Please try again.");
            }
		}
		catch(error) {
			console.log("An error occured: ", error)
		}
		setLoading(false);
		window.location.reload();
	}

	return (
		<div className="App">
			<div>
				<label>Name</label>
				<input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name"></input>
			</div>

			<div>
				<label>Email</label>
				<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email"></input>
			</div>

			<div>
				<label>Age</label>
				<input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Your Age"></input>
			</div>

			<div>
				<label>Phone Number</label>
				<input type="text" id="phone_number" value={phone_number} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Your Phone Number"></input>
			</div>

			<button onClick={save}>Save</button>

			<div>
				<h1 style={{width: "15em"}}>List of people already added:</h1>
				{data.map((dataObj) => {
					return (
						<div style={{width: "15em", backgroundColor: "#35D841", padding: 2, borderRadius: 10, marginBlock: 10, margin: 10}} >
							<p style={{ fontSize: 20, color: 'white' }}>{dataObj[1]}</p>
						</div>
					);
				})}
			</div>
	  </div>
	);
}

export default App;
