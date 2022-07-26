import React from "react";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../router/coordinator";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

import Logo from "../../assets/logo.svg";
import {
	ScreenContainer,
	InputsContainer,
	LogoImage,
	StyledButton,
} from "./styled";

const LoginPage = () => {
	const navigate = useNavigate();

	return (
		<ScreenContainer>
			<LogoImage src={Logo} alt={"Logo LabEddit"} />
			<h1>LabEddit</h1>
			<p>O projeto de rede social da Labenu</p>

			<form>
				<InputsContainer>
					<TextField
						label="E-mail"
						type="email"
						margin={"dense"}
						fullWidth
						required
					/>
					<TextField
						label="Senha"
						type="password"
						margin={"dense"}
						fullWidth
						required
					/>
				</InputsContainer>

				<Stack direction="column" spacing={2}>
					<StyledButton
						sx={{
							borderRadius: 25,
							height: 51,
							boxShadow: 0,
							color: "white",
						}}
						fullWidth
						size={"large"}
						variant={"contained"}
						type={"submit"}
					>
						Continuar
					</StyledButton>
					<hr />
					<Button
						sx={{ borderRadius: 25, height: 51, boxShadow: 0 }}
						fullWidth
						size={"large"}
						variant={"outlined"}
						color={"secondary"}
						type={"submit"}
						onClick={() => goToSignUpPage(navigate)}
					>
						Crie uma conta!
					</Button>
				</Stack>
			</form>
		</ScreenContainer>
	);
};

export default LoginPage;
