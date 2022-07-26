import styled from "styled-components";
import { Button } from "@mui/material";

export const ScreenContainer = styled.div`
	width: 100%;
	min-height: 90vh;

	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	label,
	p {
		font-family: "Noto Sans";
	}

	h1 {
		color: #373737;
		margin-left: 40px;
	}

	b {
		color: #4088cb;
	}

	.text-register {
		margin-top: 20px;

		.checkbox {
			margin: 10px 0;
		}
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
