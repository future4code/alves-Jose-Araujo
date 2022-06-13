import React, { Component } from "react";
import { FormContainer } from "./Etapa1";

export default class Etapa3 extends Component {
	render() {
		return (
			<FormContainer>
				<h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
				<p>5. Por que você não terminou um curso de graduação?</p>
				<input
					type="text"
					placeholder="Digite o motivo de não ter feito"
				/>
				<p>6. Você fez algum curso complementar?</p>
				<select>
					<option value="nenhum">Nenhum</option>
					<option value="cursotecnico">Curso técnico</option>
					<option value="superiorcompleto">Curso de inglês</option>
				</select>
			</FormContainer>
		);
	}
}
