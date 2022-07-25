import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Logo from "../../assets/logo.svg";

const LoginPage = () => {
	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": {
					m: 1,
				},
			}}
			noValidate
			autoComplete="off"
		>
			<img src={Logo} alt={""} />

			<div>
				<TextField id="outlined-search" label="Nome" type="text" />
				<TextField
					id="outlined-search"
					label="Senha"
					type="password"
				/>
			</div>
		</Box>
	);
};

export default LoginPage;
