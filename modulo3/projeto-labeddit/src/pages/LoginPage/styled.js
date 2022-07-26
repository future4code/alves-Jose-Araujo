import styled from "styled-components";
import { Button } from "@mui/material";

export const ScreenContainer = styled.div`
	display: flex;
	align-items: center;

	flex-direction: column;
	width: 100%;
	margin-top: 10vh;

	h1,
	p {
		margin: 0;
	}

	hr {
		padding: 1px;
		border-radius: 24px;
		background-image: linear-gradient(to right, #ff6489, #f9b24e);
		background-color: rebeccapurple;
		border: none;
	}
`;

export const InputsContainer = styled.div`
	display: flex;
	flex-direction: column;

	width: 80vw;
	max-width: 450px;

	align-items: center;
	margin: 20px 0;
`;

export const LogoImage = styled.img`
	width: 40vw;
	max-width: 100px;
`;

export const StyledButton = styled(Button)`
	background: linear-gradient(to right, #ff6489, #f9b24e);
	color: white !important;
`;
