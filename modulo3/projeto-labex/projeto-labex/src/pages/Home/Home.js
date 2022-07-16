import React from "react";

import { useNavigate } from "react-router-dom";
import { goToLogin, goToTripsList } from "../../routes/Coordinator";
import { ContainerHome } from "./Style";

export default function Home() {
	const navigate = useNavigate();

	return (
		<ContainerHome>
			<h1>LabeX</h1>
			<div>
				<button onClick={() => goToTripsList(navigate)}>
					Ver Viagens
				</button>
				<button onClick={() => goToLogin(navigate)}>
					Área de Admin
				</button>
			</div>
		</ContainerHome>
	);
}
