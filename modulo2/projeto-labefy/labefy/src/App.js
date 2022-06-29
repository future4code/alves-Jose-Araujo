import React, { Component } from "react";
import CreatePlaylist from "./components/CreatePlaylist/CreatePlaylist";
import GetAllPlaylists from "./components/GetAllPlaylists/GetAllPlaylists";
import AddTrackToPlaylist from "./components/AddTrackToPlaylist/AddTrackToPlaylist";
import Home from "./pages/Home";

import axios from "axios";

import { GlobalStyle } from "./Global";
import { ContainerApp } from "./styles";
import LogoMarca from "./img/logo.png";

import {
	MagnifyingGlass,
	House,
	Playlist,
	Plus,
	MusicNotes,
} from "phosphor-react";

export default class App extends Component {
	state = {
		onScreen: "Home",
		saveId: "",
		allPlaylist: [],
	};

	changeScreen = () => {
		switch (this.state.onScreen) {
			case "Home":
				return (
					<Home screenHomePlaylists={this.screenHomePlaylists} />
				);
			case "CreatePlaylist":
				return (
					<CreatePlaylist
						screenGetAllPlaylists={this.screenGetAllPlaylists}
					/>
				);
			case "GetAllPlaylists":
				return (
					<GetAllPlaylists
						getPlaylists={this.getPlaylists}
						allPlaylist={this.state.allPlaylist}
						screenGetAllPlaylists={this.screenCreatePlaylist}
						screenAddTrackToPlaylist={this.screenAddTrackToPlaylist}
					/>
				);
			case "AddTrackToPlaylist":
				return (
					<AddTrackToPlaylist
						saveId={this.state.saveId}
						screenAddTrackToPlaylist={this.screenAddTrackToPlaylist}
					/>
				);
			default:
				return (
					<div>Nada encontrado, tente retornar para o início!</div>
				);
		}
	};

	screenHomePlaylists = () => {
		this.setState({ onScreen: "Home" });
	};

	screenCreatePlaylist = () => {
		this.setState({ onScreen: "CreatePlaylist" });
	};

	screenGetAllPlaylists = () => {
		this.setState({ onScreen: "GetAllPlaylists" });
	};

	screenAddTrackToPlaylist = (id) => {
		this.setState({ onScreen: "AddTrackToPlaylist", saveId: id });
	};

	getPlaylists = () => {
		axios
			.get(
				"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
				{
					headers: {
						Authorization: "jose-carlos-alves",
					},
				}
			)
			.then((response) => {
				this.setState({ allPlaylist: response.data.result.list });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		return (
			<ContainerApp>
				<GlobalStyle />
				<nav>
					<img src={LogoMarca} alt="" />
					<ul>
						<li onClick={this.screenHomePlaylists}>
							<span>
								<House size={24} color="#b3b3b3" />
							</span>

							<p>Início</p>
						</li>

						<li>
							<span>
								<MagnifyingGlass size={24} color="#b3b3b3" />
							</span>

							<p>Buscar</p>
						</li>

						<li onClick={this.screenGetAllPlaylists}>
							<span>
								<Playlist size={24} color="#b3b3b3" />
							</span>

							<p>Minhas Playlists</p>
						</li>

						<hr />

						<li onClick={this.screenCreatePlaylist}>
							<span className="btn-plus">
								<Plus size={15} color="#242424" weight="bold" />
							</span>

							<p>Criar Playlist</p>
						</li>

						<li>
							<span className="btn-music">
								<MusicNotes size={15} color="#fcfcfc" weight="fill" />
							</span>

							<p>Minhas Músicas</p>
						</li>
					</ul>
				</nav>

				{this.changeScreen()}
			</ContainerApp>
		);
	}
}
