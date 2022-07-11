import React from "react";
import { ButtonAdmin, ButtonTrips, ContainerHome } from "./Style";

export default function Home() {
	return (
		<ContainerHome>
			<h1>LabeX</h1>

			<div>
				<ButtonTrips>Ver Viagens</ButtonTrips>
				<ButtonAdmin>Área de Admin</ButtonAdmin>
			</div>
		</ContainerHome>
	);
}
