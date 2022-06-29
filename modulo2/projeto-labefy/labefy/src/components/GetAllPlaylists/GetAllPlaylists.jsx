import React, { Component } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { ContainerAllPlaylists, PlaylistIcon } from "./styles";
import { Playlist } from "phosphor-react";

export default class getAllPlaylists extends Component {
	state = {
		playlistId: "",
	};

	componentDidMount() {
		this.props.getPlaylists();
	}

	deletePlaylist = (id) => {
		axios
			.delete(
				`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
				{
					headers: {
						Authorization: "jose-carlos-alves",
					},
				}
			)
			.then((response) => {
				toast.success("Playlist deletada com sucesso!");
				this.props.getPlaylists();
			})
			.catch((error) => {
				console.log(error);
				toast.error("Ocorreu um erro, tente novamente!");
			});
	};

	saveIdPlaylist = (id) => {
		this.setState({ playlistId: id });
	};

	render() {
		const listOfPlaylists = this.props.allPlaylist.map((playlist) => {
			return (
				<ul key={playlist.id}>
					<li>
						<PlaylistIcon>
							<Playlist size={60} color="#242424" weight="fill" />
						</PlaylistIcon>

						<p>{playlist.name}</p>

						<button onClick={() => this.deletePlaylist(playlist.id)}>
							Remover
						</button>

						<button
							onClick={() =>
								this.props.screenAddTrackToPlaylist(playlist.id)
							}
						>
							Add Música
						</button>
					</li>
				</ul>
			);
		});

		return (
			<>
				<ToastContainer autoClose={5000} />
				<ContainerAllPlaylists>
					{listOfPlaylists}
				</ContainerAllPlaylists>
			</>
		);
	}
}
