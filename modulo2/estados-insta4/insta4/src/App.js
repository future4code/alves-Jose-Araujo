import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const FormularioNovoPost = styled.form`
	display: flex;
	align-items: center;

	justify-content: center;
	flex-direction: column;

	margin: 10px;

	input {
		width: 290px;
		height: 20px;
		border: 1px solid black;

		padding: 10px;
		margin: 5px;
	}

	button {
		border: none;
		padding: 10px 60px;
		transition: all 0.5s;
		cursor: pointer;

		:hover {
			background-color: black;
			color: white;
			transition: all 0.5s;
		}
	}
`;
class App extends React.Component {
	state = {
		statePost: [
			{
				nomeUsuario: "paulinha",
				fotoUsuario: "https://picsum.photos/50/50",
				fotoPost: "https://picsum.photos/200/150",
			},
			{
				nomeUsuario: "ronaldo",
				fotoUsuario: "https://picsum.photos/50/50",
				fotoPost: "https://picsum.photos/200/150",
			},
			{
				nomeUsuario: "felipe",
				fotoUsuario: "https://picsum.photos/50/50",
				fotoPost: "https://picsum.photos/200/150",
			},
		],
		inputUser: "",
		inputFoto: "",
		inputPost: "",
	};

	novaPostagem = (e) => {
		// Para não dar reload na página quando clicar no button.
		e.preventDefault();
		// Atribuindo aos states os valores dos inputs.
		const novoPost = {
			nomeUsuario: this.state.inputUser,
			fotoUsuario: this.state.inputFoto,
			fotoPost: this.state.inputPost,
		};
		// Spread criado com os valores antigos e adicionado novos valores dos inputs.
		const novosPosts = [...this.state.statePost, novoPost];

		// Colocando o novo array com novos valores no statePost.
		this.setState({
			statePost: novosPosts,
		});

		this.setState({
			inputUser: "",
			inputFoto: "",
			inputPost: "",
		});
	};

	onChangeInputUser = (e) => {
		this.setState({
			inputUser: e.target.value,
		});
	};

	onChangeInputFoto = (e) => {
		this.setState({
			inputFoto: e.target.value,
		});
	};

	onChangeInputPost = (e) => {
		this.setState({
			inputPost: e.target.value,
		});
	};

	render() {
		const listaDePosts = this.state.statePost.map((post, index) => {
			return (
				<Post
					key={index}
					nomeUsuario={post.nomeUsuario}
					fotoUsuario={post.fotoUsuario}
					fotoPost={post.fotoPost}
				/>
			);
		});
		return (
			<MainContainer>
				<FormularioNovoPost>
					<input
						value={this.state.inputUser}
						onChange={this.onChangeInputUser}
						placeholder={"Seu Usuário"}
					/>

					<input
						value={this.state.inputFoto}
						onChange={this.onChangeInputFoto}
						placeholder={"Link Foto de perfil"}
					/>

					<input
						value={this.state.inputPost}
						onChange={this.onChangeInputPost}
						placeholder={"Foto do Post"}
					/>
					<button onClick={this.novaPostagem}>Postar</button>
				</FormularioNovoPost>

				{listaDePosts}
			</MainContainer>
		);
	}
}

export default App;
