import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";

const UseRequestData = (initialState, url) => {
	const [data, setData] = useState(initialState);
	const [loading, setLoading] = useState(true);

	setTimeout(() => {
		axios
			.get(`${BASE_URL}${url}`, {
				headers: { Authorization: localStorage.getItem("token") },
			})
			.then((response) => {
				setLoading(false);
				setData(response.data);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error.response.data);
			});
	}, 200);

	return [data, loading];
};

export default UseRequestData;
