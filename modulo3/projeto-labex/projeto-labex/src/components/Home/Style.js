import styled from "styled-components";

export const ContainerHome = styled.section`
	width: 100%;
	height: 100vh;

	display: flex;
	justify-content: center;

	align-items: center;
	flex-direction: column;

	h1 {
		font-size: 50px;
	}

	button {
		width: 150px;
		height: 40px;

		font-weight: 400;
		border-radius: 5px;
		margin: 10px;
	}
`;

export const ButtonTrips = styled.button`
	background-color: var(--btn-primary-color);
	transition: all 0.2s;

	:hover {
		background-color: transparent;
		border: 1px solid var(--btn-secondary-color);
	}
`;

export const ButtonAdmin = styled.button`
	background-color: var(--btn-primary-color);
	transition: all 0.2s;

	:hover {
		background-color: transparent;
		border: 1px solid var(--btn-secondary-color);
	}
`;
