import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from ".././pages/Home/Home";
import TripsList from ".././pages/Trips/TripsList";
import RegisterUser from "../pages/Trips/RegisterUser";
import Login from "../pages/Admin/Login";
import AdminList from "../pages/Admin/AdminList";
import AdminCreateTrip from "../pages/Admin/AdminCreateTrip";
import AdminDetails from "../pages/Admin/AdminDetails";

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="trips/list" element={<TripsList />} />
				<Route path="trips/application" element={<RegisterUser />} />
				<Route path="login" element={<Login />} />
				<Route path="/admin/trips/list" element={<AdminList />} />
				<Route
					path="/admin/trips/create"
					element={<AdminCreateTrip />}
				/>
				<Route path="/admin/trips/:id" element={<AdminDetails />} />
			</Routes>
		</BrowserRouter>
	);
};
