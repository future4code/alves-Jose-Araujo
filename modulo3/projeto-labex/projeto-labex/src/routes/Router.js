import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from ".././pages/Home/Home";
import TripsList from ".././pages/Trips/TripsList";
import RegisterUser from "../pages/Trips/RegisterUser";

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="trips/list" element={<TripsList />} />
				<Route path="trips/application" element={<RegisterUser />} />
			</Routes>
		</BrowserRouter>
	);
};
