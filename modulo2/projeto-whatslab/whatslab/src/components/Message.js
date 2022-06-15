import React, { Component } from "react";
import styled from "styled-components";

const WhatsContainer = styled.main`
	display: flex;
	align-items: center;

	flex-direction: column;
	justify-content: flex-end;

	max-width: 30vw;
	height: 99.8vh;

	margin: 0 auto;
	border: 1px solid black;
`;

const WhatsInputUsuario = styled.section`
	display: flex;
	flex-direction: row;

	width: 100%;

	button {
		width: 30%;
	}
`;

const CaixaDeTexto = styled.input``;

export default class Message extends Component {
	render() {
		return (
			<WhatsContainer>
				<WhatsInputUsuario>
					<CaixaDeTexto
						className="user-input"
						placeholder="Usuário"
					/>
					<CaixaDeTexto
						className="user-message"
						placeholder="Mensagem"
					/>
					<button>Enviar</button>
				</WhatsInputUsuario>
			</WhatsContainer>
		);
	}
}
