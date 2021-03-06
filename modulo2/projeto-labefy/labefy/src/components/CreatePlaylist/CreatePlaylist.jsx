import axios from "axios";
import React, { Component } from "react";
import { ContainerCreatePlaylist } from "./styles";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Playlist } from "phosphor-react";

export default class CreatePlaylist extends Component {
	state = {
		name: "",
	};

	createPlaylist = () => {
		const body = {
			name: this.state.name,
		};

		axios
			.post(
				"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
				body,
				{
					headers: {
						Authorization: "jose-carlos-alves",
					},
				}
			)
			.then((response) => {
				toast.success("Playlist criada com sucesso!");
				this.setState({ name: "" });
			})
			.catch((error) => {
				toast.error("Ocorreu um erro, tente novamente!");
				console.log("Erro ao criar:", error);
			});
	};

	onChangeName = (e) => {
		this.setState({ name: e.target.value });
	};

	render() {
		return (
			<ContainerCreatePlaylist>
				<ToastContainer autoClose={3000} />
				<div className="BoxCreatePlaylist">
					<span>
						<Playlist size={60} color="#242424" weight="fill" />
					</span>

					<input
						value={this.state.name}
						i
						onChange={this.onChangeName}
						type={"text"}
						placeholder="Digite o nome da playlist"
					/>

					<button onClick={this.createPlaylist}>Confirmar</button>
				</div>
			</ContainerCreatePlaylist>
		);
	}
}
