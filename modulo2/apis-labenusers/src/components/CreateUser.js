import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";

const ContainerInputs = styled.div`
	width: 30%;
	max-width: 500px;

	display: flex;
	flex-direction: column;
	margin: 0 auto;

	text-align: center;
	border: 1px solid black;
	font-family: sans-serif;

	input,
	button {
		padding: 10px;
		margin: 10px;

		border: none;
		font-size: 16px;
		border-radius: 4px;
	}

	button {
		color: white;
		background-color: blueviolet;

		transition: filter 0.2s;
		cursor: pointer;

		:hover {
			filter: brightness(1.1);
		}
	}
`;

export default class CreateUser extends Component {
	state = {
		name: "",
		email: "",
	};

	createUser = () => {
		const body = {
			name: this.state.name,
			email: this.state.email,
		};

		axios
			.post(
				"https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
				body,
				{
					headers: {
						Authorization: "jose-carlos-alves",
					},
				}
			)
			.then((res) => {
				alert("Usuário cadastrado com sucesso!");
				this.setState({ name: "", email: "" });
			})
			.catch((erro) => {
				alert(erro);
			});
	};

	onChangeName = (e) => {
		this.setState({ name: e.target.value });
	};

	onChangeEmail = (e) => {
		this.setState({ email: e.target.value });
	};

	render() {
		return (
			<>
				<button onClick={this.props.screenUserList}>
					Trocar de tela
				</button>
				<ContainerInputs>
					<input
						type="text"
						placeholder="Nome"
						value={this.state.name}
						onChange={this.onChangeName}
					/>

					<input
						type="text"
						placeholder="E-mail"
						value={this.state.email}
						onChange={this.onChangeEmail}
					/>
					<button onClick={this.createUser}>
						Cadastrar novo usuário
					</button>
				</ContainerInputs>
			</>
		);
	}
}
