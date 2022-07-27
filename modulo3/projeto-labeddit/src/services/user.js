import axios from "axios";
import { BASE_URL } from "../constants/url";
import { goToPostListPage } from "../router/coordinator";

export const login = (body, clear, navigate) => {
	axios
		.post(`${BASE_URL}/users/login`, body)
		.then((response) => {
			localStorage.setItem("token", response.data.token);
			goToPostListPage(navigate);
			clear();
		})
		.catch((error) => {
			console.log(error);
		});
};

export const signUp = (body, clear, navigate) => {
	console.log(body);
	axios
		.post(`${BASE_URL}/users/signup`, body)
		.then((response) => {
			localStorage.setItem("token", response.data.token);
			goToPostListPage(navigate);
			clear();
		})
		.catch((error) => {
			console.log(error);
		});
};
