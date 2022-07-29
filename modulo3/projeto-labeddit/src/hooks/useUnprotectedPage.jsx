import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToPostListPage } from "../router/coordinator";

const useUnprotectedPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			goToPostListPage(navigate);
		}
	}, [navigate]);
};

export default useUnprotectedPage;
