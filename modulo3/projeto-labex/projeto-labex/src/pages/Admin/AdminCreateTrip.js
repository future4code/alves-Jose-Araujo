import React, { useEffect, useState } from "react";
import axios from "axios";

import { BASE_URL } from "../../constants/BASE_URL";
import { goToAdminList } from "../.././routes/Coordinator";

import { ContainerCreateTrip } from "./Style";
import { useNavigate } from "react-router-dom";

export default function AdminCreateTrip() {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");

	const [planet, setPlanet] = useState("");
	const [description, setDescription] = useState("");

	const [duration, setDuration] = useState("");
	const navigate = useNavigate();

	const handleInputName = (e) => {
		setName(e.target.value);
	};

	const handleInputPlanet = (e) => {
		setPlanet(e.target.value);
	};

	const handleInputDate = (e) => {
		setDate(e.target.value);
	};

	const handleInputDescription = (e) => {
		setDescription(e.target.value);
	};

	const handleInputDuration = (e) => {
		setDuration(e.target.value);
	};

	useEffect(() => {
		const token = localStorage.getItem("token");

		token === null
			? navigate("/login")
			: navigate("/admin/trips/create");
	}, [navigate]);

	const onSubmitCreate = (e) => {
		e.preventDefault();
		const token = localStorage.getItem("token");

		const body = {
			name: name,
			date: date,
			planet: planet,
			description: description,
			durationInDays: +duration,
		};

		axios
			.post(`${BASE_URL}/trips`, body, {
				headers: {
					auth: token,
				},
			})
			.then((response) => {
				console.log(response.data.trip);
				alert(`Você criou uma nova trip: ${response.data.trip.name}`);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<ContainerCreateTrip>
			<header>
				<h1>Criar Viagem</h1>
			</header>

			<form onSubmit={onSubmitCreate}>
				<input
					value={name}
					onChange={handleInputName}
					placeholder={"Digite o seu nome"}
					type={"text"}
				/>

				<select value={planet} onChange={handleInputPlanet} required>
					<option hidden>Escolha um planeta</option>
					<option>Mercúrio</option>
					<option>Vênus</option>
					<option>Terra</option>
					<option>Marte</option>
					<option>Jupiter</option>
					<option>Saturno</option>
					<option>Urano</option>
					<option>Netuno</option>
					<option>Plutão</option>
				</select>

				<input
					value={date}
					onChange={handleInputDate}
					type={"date"}
				/>

				<input
					value={description}
					onChange={handleInputDescription}
					placeholder={"Descrição"}
					type={"text"}
				/>

				<input
					value={duration}
					onChange={handleInputDuration}
					placeholder={"Duração em dias"}
					type={"number"}
				/>

				<div>
					<button>Criar</button>
					<button onClick={() => goToAdminList(navigate)}>
						Voltar
					</button>
				</div>
			</form>
		</ContainerCreateTrip>
	);
}
