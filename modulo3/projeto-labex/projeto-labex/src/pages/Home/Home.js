import React from "react";

import { useNavigate } from "react-router-dom";
import { goToTripsList } from "../../routes/Coordinator";
import { ButtonAdmin, ButtonTrips, ContainerHome } from "./Style";

export default function Home() {
	const navigate = useNavigate();

	return (
		<ContainerHome>
			<h1>LabeX</h1>

			<div>
				<ButtonTrips onClick={() => goToTripsList(navigate)}>
					Ver Viagens
				</ButtonTrips>
				<ButtonAdmin>Área de Admin</ButtonAdmin>
			</div>
		</ContainerHome>
	);
}
