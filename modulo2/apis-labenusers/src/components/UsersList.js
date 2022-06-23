import axios from "axios";
import React, { Component } from "react";

import App from ".././App";

export default class UsersList extends Component {
	state = {
		allUsers: [],
		erro: "",
	};

	componentDidMount() {
		this.getAllUsers();
	}

	getAllUsers = () => {
		axios
			.get(
				"https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
				{
					headers: {
						Authorization: "jose-carlos-alves",
					},
				}
			)
			.then((res) => {
				this.setState({ allUsers: res.data });
			})
			.catch((erro) => {
				this.setState({ erro: erro.response.data });
			});
	};

	deleteUser = (id) => {
		axios
			.delete(
				`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
				{
					headers: {
						Authorization: "jose-carlos-alves",
					},
				}
			)

			.then((res) => {
				alert("Usuário deletado com sucesso!");
				this.getAllUsers();
			})
			.catch((erro) => {
				console.log(erro);
				alert("Ocorreu um erro, tente novamente");
			});
	};

	render() {
		return (
			<>
				<button onClick={this.props.screenCreateUser}>
					Trocar de tela
				</button>

				{this.state.allUsers.map((user) => {
					return (
						<ul key={user.id}>
							<li>
								<p>{user.name}</p>
								<button onClick={() => this.deleteUser(user.id)}>
									X
								</button>
							</li>
						</ul>
					);
				})}

				<hr />

				<App getAllUsers={this.getAllUsers()} />

				<h4>Procurar usuário</h4>
				<input type="text" placeholder="Nome exato para busca" />
				<button>Salvar edição</button>
			</>
		);
	}
}
