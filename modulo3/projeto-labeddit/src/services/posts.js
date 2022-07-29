import axios from "axios";
import { BASE_URL } from "../constants/url";

export const CreatePost = (body, clear) => {
	const token = localStorage.getItem("token");

	axios
		.post(`${BASE_URL}/posts`, body, {
			headers: { Authorization: token },
		})
		.then((response) => {
			alert("Post created successfully");
			clear();
		})
		.catch((error) => {
			console.log(error);
		});
};

export const CreateComment = (body, id, clear) => {
	axios
		.post(`${BASE_URL}/posts/${id}/comments`, body, {
			headers: { Authorization: localStorage.getItem("token") },
		})
		.then((response) => {
			alert(response.data);
			clear();
		})
		.catch((error) => {
			console.log(error);
		});
};
