import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

export const Loterias = () => {
	const [loterias, setLoterias] = useState([]);

	useEffect(() => {
		axios
			.get(`${BASE_URL}/loterias`)
			.then((res) => {
				setLoterias(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	}, [setLoterias]);

	return loterias;
};

export const LoteriasConcursos = () => {
	const [loteriasConcursos, setloteriasConcursos] = useState([]);

	useEffect(() => {
		axios
			.get(`${BASE_URL}/loterias-concursos`)
			.then((res) => {
				setloteriasConcursos(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	}, [setloteriasConcursos]);

	return loteriasConcursos;
};

export const Concursos = (id) => {
	const [concursos, setConcursos] = useState([]);

	useEffect(() => {
		axios
			.get(`${BASE_URL}/concursos/${id}`)
			.then((res) => {
				setConcursos(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	}, [id]);

	return concursos;
};
