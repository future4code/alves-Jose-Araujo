import React from "react";
import TextField from "@mui/material/TextField";
import Logo from "../../assets/logo.svg";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import {
	ScreenContainer,
	InputsContainer,
	LogoImage,
	StyledButton,
} from "./styled";

const LoginPage = () => {
	return (
		<ScreenContainer>
			<LogoImage src={Logo} alt={""} />
			<h1>LabEddit</h1>
			<p>O projeto de rede social da Labenu</p>

			<form>
				<InputsContainer>
					<TextField
						label="E-mail"
						type="email"
						margin={"normal"}
						fullWidth
						required
					/>
					<TextField
						label="Senha"
						type="password"
						margin={"normal"}
						fullWidth
						required
					/>
				</InputsContainer>

				<Stack direction="column" spacing={2}>
					<StyledButton
						type={"submit"}
						fullWidth
						variant={"contained"}
						color={"primary"}
						size={"large"}
						sx={{ borderRadius: 25 }}
					>
						Fazer Login
					</StyledButton>
					<hr />
					<Button
						type={"submit"}
						fullWidth
						variant={"outlined"}
						color={"secondary"}
						size={"large"}
						sx={{ borderRadius: 25 }}
					>
						Crie uma conta!
					</Button>
				</Stack>
			</form>
		</ScreenContainer>
	);
};

export default LoginPage;
