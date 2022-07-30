import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";

const useRequestComments = (id) => {
	const [comments, setComments] = useState([]);

	axios
		.get(`${BASE_URL}/posts/${id}/comments`, {
			headers: { Authorization: localStorage.getItem("token") },
		})
		.then((response) => {
			setComments(response.data);
		})
		.catch((error) => {
			console.log(error);
		});

	return [comments];
};

export default useRequestComments;
