import React from "react";

import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";

import {
	ScreenContainer,
	InputsContainer,
	StyledButton,
} from "./styled";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = () => {
	const navigate = useNavigate();
	const [form, handleInputChange, clear] = useForm({
		username: "",
		email: "",
		password: "",
	});

	useUnprotectedPage();

	const onSubmit = (e) => {
		e.preventDefault();
		signUp(form, clear, navigate);
	};

	return (
		<ScreenContainer>
			<h1>Olá, boas vindas ao LabEddit ;)</h1>

			<form onSubmit={onSubmit}>
				<InputsContainer>
					<TextField
						label="Nome de usuário"
						type="text"
						margin={"dense"}
						name={"username"}
						value={form.name}
						onChange={handleInputChange}
						fullWidth
						required
						autoFocus
					/>
					<TextField
						label="E-mail"
						type="email"
						margin={"dense"}
						name={"email"}
						value={form.email}
						onChange={handleInputChange}
						fullWidth
						required
					/>
					<TextField
						label="Senha"
						type="password"
						margin={"dense"}
						name={"password"}
						value={form.password}
						onChange={handleInputChange}
						fullWidth
						required
					/>

					<div className="text-register">
						<p>
							Ao continuar, você concorda com o nosso{" "}
							<b>Contrato de usuário </b>e nossa{" "}
							<b>Política de Privacidade</b>
						</p>
					</div>

					<div className="checkbox">
						<Checkbox required />
						<label>
							Eu concordo em receber emails sobre coisas legais no
							Labeddit
						</label>
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
