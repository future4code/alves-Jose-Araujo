import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import { goBack } from "../../routes/Coordinator";

const ContainerDetails = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	h2 {
		text-align: center;
	}

	header {
		width: 100%;
		height: 150px;

		display: flex;
		align-items: center;
		justify-content: space-around;

		h1 {
			font-size: 2rem;
		}

		button {
			width: 140px;
			height: 40px;

			font-weight: 400;
			border-radius: 50px;

			margin: 10px;
			background-color: var(--btn-primary-color);
			transition: all 200ms;

			:hover {
				background-color: var(--btn-secondary-color);
				transform: scale(1.05);
			}
		}
	}

	section {
		.ContainerTrip {
			border-radius: 5px;
			background-color: var(--btn-primary-color);
			padding: 10px;
			margin-bottom: 10px;
		}

		.CardCandidates {
			background-color: var(--btn-primary-color);
			border-radius: 5px;

			padding: 10px;
			margin-bottom: 10px;

			li {
				margin: 10px;
			}

			.BoxButtons {
				width: 100%;
				display: flex;

				justify-content: center;
				align-items: center;

				button {
					width: 140px;
					height: 40px;

					font-weight: 400;
					border-radius: 50px;

					margin: 10px;
					background-color: var(--btn-secondary-color);
					transition: all 200ms;

					:hover {
						background-color: var(--btn-primary-color);
						transform: scale(1.05);
					}
				}
			}
		}

		.CandidatesApproved {
			border-radius: 5px;
			background-color: var(--btn-primary-color);

			margin-bottom: 15px;
			padding: 10px;
		}
	}
`;

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
	}, [params, tripDetails]);

	const onChangeDecide = (candidateId, choiceApplication) => {
		const token = localStorage.getItem("token");
		const tripId = tripDetails.id;

		const body = {
			approve: choiceApplication,
		};

		axios
			.put(
				`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`,
				body,
				{
					headers: {
						auth: token,
					},
				}
			)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<ContainerDetails>
			<header>
				<h1>Detalhes da Viagem</h1>
				<button onClick={() => goBack(navigate)}>Voltar</button>
			</header>

			<section>
				<div className="ContainerTrip">
					<h2>Viagem</h2>
					<p>Nome: {tripDetails.name}</p>
					<p>Descrição: {tripDetails.description}</p>
					<p>Planeta: {tripDetails.planet}</p>
					<p>Duração: {tripDetails.durationInDays}</p>
					<p>Data: {tripDetails.date}</p>
				</div>

				<div className="CardCandidates">
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
									<div className="BoxButtons">
										<button
											onClick={() =>
												onChangeDecide(candidate.id, true)
											}
										>
											Aprovar
										</button>
										<button
											onClick={() =>
												onChangeDecide(candidate.id, false)
											}
										>
											Reprovar
										</button>
									</div>
								</li>
							</ul>
						);
					})}
				</div>

				<div className="CandidatesApproved">
					<h2>Candidatos Aprovados</h2>
					{tripDetails.approved?.map((approved) => {
						return (
							<ul key={approved.id}>
								<li>
									<p>Nome: {approved.name}</p>
								</li>
							</ul>
						);
					})}
				</div>
			</section>
		</ContainerDetails>
	);
}
