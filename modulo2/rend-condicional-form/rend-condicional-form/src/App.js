import React, { Component } from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

const AppContainer = styled.main`
	text-align: center;
`;

const ButtonNextStep = styled.button`
	margin-top: 15px;
`;
export default class App extends Component {
	state = {
		etapa: 1,
	};

	renderizaEtapa = () => {
		switch (this.state.etapa) {
			case 1:
				return <Etapa1 />;
			case 2:
				return <Etapa2 />;
			case 3:
				return <Etapa3 />;
			case 4:
				return <Final />;
			default:
				break;
		}
	};

	irParaProximaEtapa = () => {
		this.setState({ etapa: this.state.etapa + 1 });
	};

	render() {
		return (
			<AppContainer>
				{this.renderizaEtapa()}

				<ButtonNextStep onClick={() => this.irParaProximaEtapa()}>
					Próxima etapa
				</ButtonNextStep>
			</AppContainer>
		);
	}
}
