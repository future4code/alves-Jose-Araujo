import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";

import { goToHome } from "../../routes/Coordinator";
import { BASE_URL } from "../.././constants/BASE_URL";

const ContainerLogin = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;
	gap: 20px;

	form {
		width: 350px;
		height: auto;

		display: flex;
		flex-direction: column;

		align-items: center;
		gap: 10px;

		input {
			width: 100%;
			padding: 12px;

			background-color: var(--txt-primary-color);
			border: none;

			border-radius: 5px;
			outline-color: var(--btn-primary-color);
		}

		div {
			button {
				width: 140px;
				height: 40px;

				font-weight: 400;
				border-radius: 50px;

				margin: 10px;
				background-color: var(--btn-primary-color);
				transition: all 200ms;

				:hover {
					background-color: var(--btn-secondary-color);
					transform: scale(1.05);
				}
			}
		}
	}
`;

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleInputEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleInputPassword = (e) => {
		setPassword(e.target.value);
	};

	useEffect(() => {
		const token = localStorage.getItem("token");

		token === null
			? console.log("Token is null")
			: navigate("/admin/trips/list");
	}, [navigate]);

	const onSubmitLogin = (e) => {
		e.preventDefault();
		const body = {
			email: email,
			password: password,
		};

		axios
			.post(`${BASE_URL}/login`, body)
			.then((response) => {
				localStorage.setItem("token", response.data.token);
				navigate("/admin/trips/list");
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<ContainerLogin>
			<header>
				<h1>Página de Login</h1>
			</header>

			<form onSubmit={onSubmitLogin}>
				<input
					onChange={handleInputEmail}
					value={email}
					type="email"
					required
					placeholder="Digite o seu e-mail"
				/>
				<input
					onChange={handleInputPassword}
					value={password}
					type={"password"}
					required
					placeholder="Digite a sua senha"
				/>

				<div>
					<button onClick={() => goToHome(navigate)}>Voltar</button>
					<button>Entrar</button>
				</div>
			</form>
		</ContainerLogin>
	);
}
