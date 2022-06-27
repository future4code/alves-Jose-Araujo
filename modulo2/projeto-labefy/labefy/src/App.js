import React, { Component } from "react";
import CreatePlaylist from "./components/CreatePlaylist/CreatePlaylist";
import GetAllPlaylists from "./components/GetAllPlaylists/GetAllPlaylists";

import { GlobalStyle } from "./Global";
import { ContainerApp } from "./styles"

import LogoMarca from "./img/logo.png";
import Home from "./pages/Home"

import {
	MagnifyingGlass, 
	House, 
	Playlist, 
	Plus, 
	MusicNotes} from "phosphor-react"

export default class App extends Component {
	state = {
		onScreen: "Home",
	}

	changeScreen = () => {
		switch (this.state.onScreen) {
			case "Home":
				return (<Home screenHomePlaylists={this.screenHomePlaylists}/>)
			case "CreatePlaylist":
				return (<CreatePlaylist screenGetAllPlaylists={this.screenGetAllPlaylists}/>)
			case "GetAllPlaylists":
				return (<GetAllPlaylists screenGetAllPlaylists={this.screenCreatePlaylist}/>)
			default:
				return (<div>Loading...</div>)
		}
	}

	screenCreatePlaylist = () => {
		this.setState({ onScreen: "CreatePlaylist"})
		console.log("deu certo")
	}

	screenGetAllPlaylists = () => {
		this.setState({ onScreen: "GetAllPlaylists"})
    }

	screenHomePlaylists = () => {
		this.setState({ onScreen: "Home"})
    }

	render() {
		return (
			<ContainerApp>
				<GlobalStyle />
				<nav>
					<img src={LogoMarca} alt=""/>
					<ul>
						<li onClick={this.screenHomePlaylists}>
							<span>
								<House size={24} color="#b3b3b3" />
							</span>

							<p>
								Início
							</p>
						</li>

						<li>
							<span>
								<MagnifyingGlass size={24} color="#b3b3b3" />
							</span>

							<p>
								Buscar
							</p>
						</li>

						<li onClick={this.screenGetAllPlaylists}>
							<span>
								<Playlist size={24} color="#b3b3b3" />
							</span>

							<p>
								Minhas Playlists
							</p>
						</li>

						<hr />

						<li onClick={this.screenCreatePlaylist}>
							<span className="btn-plus">
								<Plus size={15} color="#242424" weight="bold" />
							</span>

							<p>
								Criar Playlist
							</p>
						</li>

						<li>
							<span className="btn-music">
								<MusicNotes size={15} color="#fcfcfc" weight="fill" />
							</span>

							<p>
								Adicionar Música
							</p>
						</li>
					</ul>
				</nav>
				{/* <Home/> */}
				{/* <GetAllPlaylists /> */}
				{this.changeScreen()}
			</ContainerApp>
		);
	}
}
