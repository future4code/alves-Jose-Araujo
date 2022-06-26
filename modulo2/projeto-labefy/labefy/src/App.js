import React, { Component } from "react";
import CreatePlaylist from "./components/CreatePlaylist/CreatePlaylist";
import GetAllPlaylists from "./components/GetAllPlaylists";

import { GlobalStyle } from "./Global";
import { ContainerApp } from "./styles"

import {
	MagnifyingGlass, 
	House, 
	Playlist, 
	Plus, 
	MusicNotes} from "phosphor-react"

export default class App extends Component {
	state = {
		onScreen: "CreatePlaylist",
	}

	changeScreen = () => {
		switch (this.state.onScreen) {
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
	}

	screenGetAllPlaylists = () => {
		this.setState({ onScreen: "GetAllPlaylists"})
    }

	render() {
		return (
			<ContainerApp>
				<GlobalStyle />
				<nav>
					<h1>Labefy</h1>
					<ul>
						<li>
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

						<li>
							<span>
								<Playlist size={24} color="#b3b3b3" />
							</span>

							<p>
								Minhas Playlist
							</p>
						</li>

						<hr />

						<li>
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
				{this.changeScreen()}
			</ContainerApp>
		);
	}
}
