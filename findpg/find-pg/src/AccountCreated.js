import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/AccountCreated.css";
import AccountCreatedTick from "./images/AccountCreatedTick.png";

export default function AccountCreated({ show, onHide }) {
	const [count, setCount] = useState(5);

	useEffect(() => {
		const countdownInterval = setInterval(() => {
			setCount((prevCount) => {
				if (prevCount > 1) {
					return prevCount - 1;
				} else {
					clearInterval(countdownInterval);
					onHide();
					return prevCount;
				}
			});
		}, 1000);

		const redirectTimeout = setTimeout(() => {
			onHide();
		}, 5000);

		return () => {
			clearInterval(countdownInterval);
			clearTimeout(redirectTimeout);
		};
	}, [onHide]);

	return (
		<>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
			</style>
			<Modal show={show} onHide={onHide} centered>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<h2 className="accountCreatedText">
						Account Created Successfully
					</h2>
					<img
						src={AccountCreatedTick}
						className="accountCreatedTick"
						alt="tick"
					/>
				</Modal.Body>
				<p>You will be redirected to the home page in: {count}</p>
			</Modal>
		</>
	);
}
