import React, { Component } from "react";
import axios from "axios";

import { ContainerAddTrack, TrackContainer } from "./styles";
import { Play } from "phosphor-react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default class AddTrackToPlaylist extends Component {
	state = {
		tracks: [],
		newTrackName: "",
		newTrackArtist: "",
		NewTrackLink: "",
	};

	componentDidMount() {
		this.getPlaylistTracks();
	}

	componentDidUpdate() {
		this.getPlaylistTracks();
	}

	getPlaylistTracks = () => {
		axios
			.get(
				`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.saveId}/tracks`,
				{
					headers: {
						Authorization: "jose-carlos-alves",
					},
				}
			)
			.then((response) => {
				this.setState({ tracks: response.data.result.tracks });
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	addNewTrack = () => {
		const body = {
			name: this.state.newTrackName,
			artist: this.state.newTrackArtist,
			url: this.state.NewTrackLink,
		};

		axios
			.post(
				`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.saveId}/tracks`,
				body,
				{
					headers: {
						Authorization: "jose-carlos-alves",
					},
				}
			)
			.then((resposta) => {
				toast.success("Música adicionada com sucesso!");
				this.getPlaylistTracks();
				this.setState({
					newTrackName: "",
					newTrackArtist: "",
					NewTrackLink: "",
				});
			})
			.catch((erro) => {
				toast.error("Ocorreu um erro, tente novamente!");
				console.log(erro);
			});
	};

	deleleteTrack = (id) => {
		axios
			.delete(
				`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.saveId}/tracks/${id}`,
				{
					headers: {
						Authorization: "jose-carlos-alves",
					},
				}
			)
			.then((res) => {
				toast.success("Música removida com sucesso!");
				this.getPlaylistTracks();
			})
			.catch((erro) => {
				toast.error("Ocorreu um erro, tente novamente!");
				alert(erro.response);
			});
	};

	onChangeInputMusic = (e) => {
		this.setState({ newTrackName: e.target.value });
	};

	onChangeInputArtist = (e) => {
		this.setState({ newTrackArtist: e.target.value });
	};

	onChangeInputLink = (e) => {
		this.setState({ NewTrackLink: e.target.value });
	};

	render() {
		const listTracks = this.state.tracks.map((track) => {
			return (
				<TrackContainer key={track.id}>
					<section>
						<p>Música: {track.name}</p>
						<p>Artista: {track.artist}</p>

						<iframe
							width="500"
							height="250"
							src={`https://www.youtube.com/embed/${track.url.substring(
								32
							)}`}
							title="YouTube video player"
						></iframe>

						<button onClick={() => this.deleleteTrack(track.id)}>
							Remover Música
						</button>
					</section>
				</TrackContainer>
			);
		});

		return (
			<ContainerAddTrack>
				<ToastContainer autoClose={5000} />
				{listTracks}
				<div className="BoxCreateTrack">
					<span>
						<Play size={60} color="#242424" weight="fill" />
					</span>

					<input
						type={"text"}
						onChange={this.onChangeInputMusic}
						value={this.state.newTrackName}
						placeholder="Digite o nome da música"
					/>

					<input
						type={"text"}
						onChange={this.onChangeInputArtist}
						value={this.state.newTrackArtist}
						placeholder="Digite o nome do artista"
					/>

					<input
						type={"text"}
						onChange={this.onChangeInputLink}
						value={this.state.NewTrackLink}
						placeholder="Digite o link da música"
					/>

					<button onClick={this.addNewTrack}>Confirmar</button>
				</div>
			</ContainerAddTrack>
		);
	}
}
