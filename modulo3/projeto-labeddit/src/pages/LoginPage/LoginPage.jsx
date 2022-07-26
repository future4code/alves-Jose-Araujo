import React from "react";
import TextField from "@mui/material/TextField";
import Logo from "../../assets/logo.svg";
import { ScreenContainer } from "./styled";

const LoginPage = () => {
	return (
		<ScreenContainer>
			<img src={Logo} alt={""} />

			<TextField id="outlined-search" label="Nome" type="text" />
			<TextField id="outlined-search" label="Senha" type="password" />
		</ScreenContainer>
	);
};

export default LoginPage;
