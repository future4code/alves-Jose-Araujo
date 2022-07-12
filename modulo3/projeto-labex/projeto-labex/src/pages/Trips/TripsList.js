import React from "react";
import { useNavigate } from "react-router-dom";

import { goToHome, goToApplication } from "../../routes/Coordinator";
import { ContainerTripsList, Trips, TripsCard } from "./Style";

export default function TripsList() {
	const navigate = useNavigate();

	return (
		<ContainerTripsList>
			<header>
				<button onClick={() => goToHome(navigate)}>Voltar</button>
				<button onClick={() => goToApplication(navigate)}>
					Inscrever-se
				</button>
				<h1>Lista de Viagens</h1>
			</header>

			<Trips>
				<TripsCard>
					<b>Nome: Tim Maia</b>
					<p>
						Descrição: Viagem ao planeta do homem mais poderoso do
						mundo, Son Goku!
					</p>
					<p>Planeta: Son Goku</p>
					<p>Duração: 100</p>
					<p>Data: 2024-12-31</p>
				</TripsCard>

				<TripsCard>
					<p>Nome: Tim Maia</p>
					<p>
						Descrição: Viagem ao planeta do homem mais poderoso do
						mundo, Son Goku!
					</p>
					<p>Planeta: Son Goku</p>
					<p>Duração: 100</p>
					<p>Data: 2024-12-31</p>
				</TripsCard>

				<TripsCard>
					<p>Nome: Tim Maia</p>
					<p>
						Descrição: Viagem ao planeta do homem mais poderoso do
						mundo, Son Goku!
					</p>
					<p>Planeta: Son Goku</p>
					<p>Duração: 100</p>
					<p>Data: 2024-12-31</p>
				</TripsCard>

				<TripsCard>
					<p>Nome: Tim Maia</p>
					<p>
						Descrição: Viagem ao planeta do homem mais poderoso do
						mundo, Son Goku!
					</p>
					<p>Planeta: Son Goku</p>
					<p>Duração: 100</p>
					<p>Data: 2024-12-31</p>
				</TripsCard>

				<TripsCard>
					<p>Nome: Tim Maia</p>
					<p>
						Descrição: Viagem ao planeta do homem mais poderoso do
						mundo, Son Goku!
					</p>
					<p>Planeta: Son Goku</p>
					<p>Duração: 100</p>
					<p>Data: 2024-12-31</p>
				</TripsCard>

				<TripsCard>
					<p>Nome: Tim Maia</p>
					<p>
						Descrição: Viagem ao planeta do homem mais poderoso do
						mundo, Son Goku!
					</p>
					<p>Planeta: Son Goku</p>
					<p>Duração: 100</p>
					<p>Data: 2024-12-31</p>
				</TripsCard>
			</Trips>
		</ContainerTripsList>
	);
}
