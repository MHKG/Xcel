import React from "react";
import "./css/HomePage.css";
import Header from "./Header";
import SearchBar from "./SearchBar";

function HomePage() {
	return (
		<>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
			</style>
			<div className="homePage">
				<Header />

				<h2 className="findStay">Find your best stay</h2>
				<p className="explore">
					Explore our extensive selection of comfortable and
					convenient accommodations tailored to meet your new
					beginnings
				</p>
				<div className="searchBarPosition1">
					<SearchBar />
				</div>
			</div>
		</>
	);
}

export default HomePage;
