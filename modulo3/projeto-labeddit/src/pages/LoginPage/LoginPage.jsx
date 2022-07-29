import React from "react";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
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
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = () => {
	const navigate = useNavigate();
	const [form, handleInputChange, clear] = useForm({
		email: "",
		password: "",
	});

	useUnprotectedPage();

	const onSubmitForm = (e) => {
		e.preventDefault();
		login(form, clear, navigate);
	};

	return (
		<ScreenContainer>
			<LogoImage src={Logo} alt={"Logo LabEddit"} />
			<h1>LabEddit</h1>
			<p>O projeto de rede social da Labenu</p>

			<form onSubmit={onSubmitForm}>
				<InputsContainer>
					<TextField
						label="E-mail"
						type="email"
						margin={"dense"}
						value={form.email}
						onChange={handleInputChange}
						name={"email"}
						fullWidth
						required
						autoFocus
					/>
					<TextField
						label="Senha"
						name={"password"}
						type="password"
						value={form.password}
						onChange={handleInputChange}
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
