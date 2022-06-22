import axios from "axios";
import React, { Component } from "react";

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
				<div>
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
				</div>
			</>
		);
	}
}
