import React from "react";
import styled from "styled-components";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import iconeSalvar from "../../img/save.svg";
import iconeSalvarPreto from "../../img/save-border.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

const PostContainer = styled.div`
	border: 1px solid gray;
	width: 300px;
	margin-bottom: 10px;
`;

const PostHeader = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	padding-left: 10px;
`;

const PostFooter = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	padding: 0 10px;
	justify-content: space-between;
`;

const UserPhoto = styled.img`
	height: 30px;
	width: 30px;
	margin-right: 10px;
	border-radius: 50%;
`;

const PostPhoto = styled.img`
	width: 100%;
`;

class Post extends React.Component {
	state = {
		curtido: false,
		marcado: false,
		numeroCurtidas: 0,
		comentando: false,
		numeroComentarios: 0,
	};

	onClickCurtida = () => {
		let curtidaNumero = 0;

		// Inicia primeiro o estado como false
		console.log(this.state.curtido);

		if (this.state.curtido) {
			curtidaNumero = this.state.numeroCurtidas - 1;
			console.log("passei aqui 1");
		} else {
			curtidaNumero = this.state.numeroCurtidas + 1;
			console.log("passei aqui 2");
		}

		this.setState({
			curtido: !this.state.curtido,
			numeroCurtidas: curtidaNumero,
		});
	};

	onClickSalvar = () => {
		this.setState({
			marcado: !this.state.marcado,
		});
	};

	onClickComentario = () => {
		this.setState({
			comentando: !this.state.comentando,
		});
	};

	aoEnviarComentario = () => {
		this.setState({
			comentando: false,
			numeroComentarios: this.state.numeroComentarios + 1,
		});
	};

	render() {
		let iconeCurtida;
		let iconeMarcado;

		if (this.state.curtido) {
			iconeCurtida = iconeCoracaoPreto;
		} else {
			iconeCurtida = iconeCoracaoBranco;
		}

		if (this.state.marcado) {
			iconeMarcado = iconeSalvar;
		} else {
			iconeMarcado = iconeSalvarPreto;
		}

		let componenteComentario;

		if (this.state.comentando) {
			componenteComentario = (
				<SecaoComentario aoEnviar={this.aoEnviarComentario} />
			);
		}

		return (
			<PostContainer>
				<PostHeader>
					<UserPhoto
						src={this.props.fotoUsuario}
						alt={"Imagem do usuario"}
					/>
					<p>{this.props.nomeUsuario}</p>
				</PostHeader>

				<PostPhoto src={this.props.fotoPost} alt={"Imagem do post"} />

				<PostFooter>
					<IconeComContador
						icone={iconeCurtida}
						onClickIcone={this.onClickCurtida}
						valorContador={this.state.numeroCurtidas}
					/>

					<IconeComContador
						icone={iconeMarcado}
						onClickIcone={this.onClickSalvar}
						valorContador={this.state.numeroSalvar}
					/>

					<IconeComContador
						icone={iconeComentario}
						onClickIcone={this.onClickComentario}
						valorContador={this.state.numeroComentarios}
					/>
				</PostFooter>
				{componenteComentario}
			</PostContainer>
		);
	}
}

export default Post;
