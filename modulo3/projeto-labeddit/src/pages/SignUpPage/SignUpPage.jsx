import React from "react";

import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";

import {
	ScreenContainer,
	InputsContainer,
	StyledButton,
} from "./styled";

const SignUpPage = () => {
	return (
		<ScreenContainer>
			<h1>Olá, boas vindas ao LabEddit ;)</h1>

			<form>
				<InputsContainer>
					<TextField
						label="Nome de usuário"
						type="text"
						margin={"dense"}
						fullWidth
						required
					/>
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

					<div className="text-register">
						<p>
							Ao continuar, você concorda com o nosso{" "}
							<b>Contrato de usuário </b>e nossa{" "}
							<b>Política de Privacidade</b>
						</p>

						<div className="checkbox">
							<Checkbox />
							<label>
								Eu concordo em receber emails sobre coisas legais no
								Labeddit
							</label>
						</div>
					</div>
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
				</Stack>
			</form>
		</ScreenContainer>
	);
};

export default SignUpPage;
