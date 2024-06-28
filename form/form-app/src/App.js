import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from "./UserForm";
import PageNotFound from "./PageNotFound";
import ThankYou from "./ThankYou";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<PageNotFound />} />
				<Route path="/" element={<UserForm />} />
				<Route path="/thankyou" element={<ThankYou />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
