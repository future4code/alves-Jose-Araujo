import React, { Component } from "react";
import styled from "styled-components";

export const FormContainer = styled.section`
	text-align: center;
`;

export default class Etapa1 extends Component {
	render() {
		return (
			<FormContainer>
				<h3>ETAPA 1 - DADOS GERAIS</h3>
				<p>1. Qual o seu nome?</p>
				<input type="text" placeholder="Digite o seu nome" />
				<p>2. Qual sua idade?</p>
				<input type="number" placeholder="Digite a sua idade" />
				<p>3. Qual seu email?</p>
				<input type="text" placeholder="Digite o seu email" />
				<p>4. Qual a sua escolaridade?</p>
				<select>
					<option value="medioincompleto">
						Ensino médio incompleto
					</option>
					<option value="mediocompleto">Ensino médio completo</option>
					<option value="superiorincompleto">
						Ensino superior incompleto
					</option>
					<option value="superiorcompleto">
						Ensino superior completo
					</option>
				</select>
			</FormContainer>
		);
	}
}
