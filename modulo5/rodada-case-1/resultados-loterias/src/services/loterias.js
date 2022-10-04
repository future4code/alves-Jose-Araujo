import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../../../../Desktop/Iniciar-Projeto-React-main/src/constants/BASE_URL";

export const Loterias = () => {
	const [loterias, setLoterias] = useState([]);

	axios
		.get(`${BASE_URL}/api/loterias`)
		.then((res) => {
			setLoterias(res.data);
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err.response);
		});

	return loterias;
};
