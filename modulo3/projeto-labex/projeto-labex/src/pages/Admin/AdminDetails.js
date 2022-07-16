import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import { goBack } from "../../routes/Coordinator";

export default function AdminDetails() {
	const [tripDetails, setTripDetails] = useState({});

	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		const token = localStorage.getItem("token");

		axios
			.get(`${BASE_URL}/trip/${params.id}`, {
				headers: {
					auth: token,
				},
			})
			.then((res) => {
				setTripDetails(res.data.trip);
			})
			.catch((err) => {
				console.log(err.response.message);
			});
	}, [params]);

	return (
		<div>
			<header>
				<h1>Detalhes da Viagem</h1>
			</header>

			<section>
				<p>Nome: {tripDetails.name}</p>
				<p>Descrição: {tripDetails.description}</p>
				<p>Planeta: {tripDetails.planet}</p>
				<p>Duração: {tripDetails.durationInDays}</p>
				<p>Data: {tripDetails.date}</p>
				<button onClick={() => goBack(navigate)}>Voltar</button>

				<div>
					<h2>Candidatos Pendentes</h2>
					{tripDetails.candidates?.map((candidate) => {
						return (
							<ul key={candidate.id}>
								<li>
									<p>Nome: {candidate.name}</p>
									<p>Profissão: {candidate.profession}</p>
									<p>Idade: {candidate.age}</p>
									<p>País: {candidate.country}</p>
									<p>
										Texto de Candidatura: {candidate.applicationText}
									</p>
								</li>
							</ul>
						);
					})}
				</div>

				<div>
					<h2>Candidatos Aprovados</h2>
					{tripDetails.approved ? (
						<p>Não há candidatos aprovados</p>
					) : (
						tripDetails.approved?.map((approved) => {
							return (
								<ul key={approved.id}>
									<li>
										<p>Nome: {approved.name}</p>
									</li>
								</ul>
							);
						})
					)}
				</div>
			</section>
		</div>
	);
}
