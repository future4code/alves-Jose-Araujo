import styled from "styled-components";
import { Button } from "@mui/material";

export const ScreenContainer = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	h1,
	p {
		margin: 0;
	}

	h1 {
		color: #373737;
	}

	p {
		margin-bottom: 30px;
	}

	hr {
		padding: 0.5px;
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
`;
