import React, { Component } from "react";
import { FormContainer } from "./Etapa1";

export default class Etapa2 extends Component {
	render() {
		return (
			<FormContainer>
				<h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
				<p>5. Qual curso?</p>
				<input type="text" placeholder="Digite o seu curso" />
				<p>6. Qual a unidade de ensino?</p>
				<input type="text" placeholder="Digite a unidade de ensino" />
			</FormContainer>
		);
	}
}
