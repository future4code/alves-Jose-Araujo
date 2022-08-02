import styled from "styled-components";
import { Button } from "@mui/material";

export const ScreenContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;
	padding: 15px;

	.CardContainer {
		display: flex;

		.CardActions {
			width: 100px;
			height: 28px;

			display: flex;
			align-items: center;
			justify-content: space-around;

			border: 1px solid #ececec;
			border-radius: 10px;
			margin-right: 10px;
		}

		.CardMessage {
			border: 1px solid #ececec;
			border-radius: 10px;
			width: 50px;
			height: 28px;
			display: flex;
			align-items: center;
			justify-content: space-around;
		}
	}
`;

export const InputsContainer = styled.div`
	display: flex;
	flex-direction: column;

	width: 93vw;
	max-width: 450px;

	align-items: center;
	margin: 15px 0;
`;

export const StyledButton = styled(Button)`
	background: linear-gradient(to right, #ff6489, #f9b24e);
`;

export const StyledButton2 = styled(Button)`
	width: 10px !important;
	padding: 0 !important;
`;
