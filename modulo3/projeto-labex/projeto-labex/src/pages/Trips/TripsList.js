import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { goToHome, goToApplication } from "../../routes/Coordinator";
import { ContainerTripsList } from "./Style";
import { BASE_URL } from "../.././constants/BASE_URL";

export default function TripsList() {
	const [tripsList, setTripsList] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${BASE_URL}/trips`)
			.then((response) => {
				setTripsList(response.data.trips);
			})
			.catch((error) => {
				console.log(error.response);
			});
	}, []);

	return (
		<ContainerTripsList>
			<header>
				<h1>Lista de Viagens</h1>

				<div>
					<button onClick={() => goToHome(navigate)}>Voltar</button>
					<button onClick={() => goToApplication(navigate)}>
						Inscrever-se
					</button>
				</div>
			</header>

			{tripsList?.map((trip) => {
				return (
					<div key={trip.id}>
						<ul>
							<li>
								<b>Nome: {trip.name}</b>
								<p>Descrição: {trip.description}</p>
								<p>Planeta: {trip.planet}</p>
								<p>Duração: {trip.durationInDays}</p>
								<p>Data: {trip.date}</p>
							</li>
						</ul>
					</div>
				);
			})}
		</ContainerTripsList>
	);
}
