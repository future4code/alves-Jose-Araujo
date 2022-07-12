import styled from "styled-components";

// TODO: Arrumar o bug com o scroll quando colocamos em mobile, centralizar o texto "Lista de Viagens" e colocar funcionalidade para os buttons.

export const ContainerTripsList = styled.section`
	width: 100%;
	height: 100vh;

	display: flex;
	align-items: center;

	justify-content: center;
	flex-direction: column;

	button {
		width: 150px;
		height: 40px;

		font-weight: 400;
		border-radius: 5px;
		margin: 10px;

		background-color: var(--btn-primary-color);
		transition: all 0.2s;

		:hover {
			background-color: transparent;
			border: 1px solid var(--btn-secondary-color);
		}
	}
`;

export const Trips = styled.ul`
	display: flex;
	gap: 20px;

	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

export const TripsCard = styled.li`
	padding: 20px;
	border-radius: 5px;

	transition: all 0.2s;
	background-color: var(--btn-primary-color);
	border: 1px solid var(--btn-secondary-color);

	:hover {
		background-color: transparent;
		cursor: pointer;
		border: 1px solid var(--btn-secondary-color);
	}
`;
