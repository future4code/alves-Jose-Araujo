import styled from "styled-components";

export const HeaderContainer = styled.div`
	width: 100%;
	height: 15vh;

	background-color: #00b8e2;
`;

export const Form = styled.div`
	height: 100%;
	gap: 20px;

	display: flex;
	justify-content: center;
	align-items: center;

	input {
		width: 250px;
		height: 50px;

		border: none;
		border-radius: 4px;
		padding: 20px;
	}

	button {
		width: 160px;
		height: 50px;

		color: white;
		font-weight: bold;

		border: 2px solid white;
		border-radius: 4px;
		background-color: transparent;
	}
`;
