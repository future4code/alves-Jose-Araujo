import React from "react";
import styled from "styled-components";
import "./styles.css";

import Plus from "./img/plus.svg";
import Trash from "./img/trash.svg";
import Pencil from "./img/pencil.svg";

const TarefaList = styled.ul`
	text-align: left;
	width: 100%;
	padding: 0;
`;

const Tarefa = styled.li`
	user-select: none;
	width: 100%;

	text-decoration: ${({ completa }) =>
		completa ? "line-through" : "none"};

	background-color: ${({ completa }) =>
		completa ? "none" : "#2196f3"};

	border: 2px solid #2196f3;
	color: ${({ completa }) => (completa ? "#2196f3" : "white")};

	list-style: none;
	margin: 5px 10px;

	padding: 10px;
	border-radius: 5px;

	transition: all 0.2s;
	cursor: pointer;

	:hover {
		opacity: 0.8;
		transition: all 0.2s;
	}
`;

const InputsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	gap: 10px;
	margin-left: 55px;

	input {
		width: 250px;
		height: 45px;

		padding: 0 8px;
		border: 2px solid #dcdcdc;

		border-radius: 5px;
		outline: none;

		:focus {
			border: 2px solid #2196f3;
		}
	}

	button {
		display: flex;
		align-items: center;

		justify-content: center;
		flex-direction: row;

		background-color: #2196f3;
		color: white;

		cursor: pointer;
		padding: 10px;

		border-radius: 5px;
		border: none;
		transition: all 0.2s;

		:hover {
			background-color: #047cdb;
			transition: all 0.2s;
		}
	}
`;

const InputContainerSelect = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 10px;

	input {
		width: 250px;
		height: 45px;

		padding: 0 8px;
		border: 2px solid #2196f3;
		border-radius: 5px;
		outline: none;
	}

	select {
		width: 250px;
		height: 45px;

		padding: 0 5px;
		border-radius: 5px;
		/* margin-right: 70px; */

		color: grey;
		background: #fff;
		box-shadow: 0 1px 3px -2px #9098a9;
		cursor: pointer;

		border: 2px solid #dcdcdc;
		outline: none;

		:active {
			border: 2px solid #2196f3;
		}
	}
`;

const TituloTodoList = styled.h1`
	width: 90%;
	height: 7vh;

	padding: 5px;
	margin: 15px 0;

	border: 2px solid #2196f3;
	border-radius: 5px;
	color: #2196f3;
`;

const ButtonDelete = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	outline: none;
	border: none;

	padding: 10px;
	border-radius: 4px;

	background-color: #2196f3;
	cursor: pointer;
	transition: all 0.2s;

	:hover {
		transition: all 0.2s;
		background-color: #047cdb;
	}

	img {
		width: 25px;
	}
`;

const ButtonEdit = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	outline: none;
	border: none;

	padding: 10px;
	border-radius: 4px;
	margin-right: 10px;

	background-color: #2196f3;
	cursor: pointer;
	transition: all 0.2s;

	:hover {
		transition: all 0.2s;
		background-color: #047cdb;
	}

	img {
		width: 25px;
	}
`;

const TarefaListContainter = styled.div`
	margin-top: 20px;
	width: 90%;
`;

const ImagemButton = styled.img`
	width: 25px;
`;

class App extends React.Component {
	state = {
		tarefas: [],
		inputValue: "",
		filtro: "",
	};

	// Salvar as tarefas sempre que uma nova tarefa for criada.
	componentDidUpdate() {
		localStorage.setItem(
			"listaDeTarefas",
			JSON.stringify(this.state.tarefas)
		);
	}

	componentDidMount() {
		const texto = JSON.parse(localStorage.getItem("listaDeTarefas"));
		texto && this.setState({ tarefas: texto });
	}

	onChangeInput = (e) => {
		this.setState({ inputValue: e.target.value });
	};

	criaTarefa = () => {
		const novaTarefa = {
			id: Date.now(),
			texto: this.state.inputValue,
			completa: false,
		};

		const novaListaDeTarefas = [novaTarefa, ...this.state.tarefas];
		this.setState({ tarefas: novaListaDeTarefas });
		this.setState({ inputValue: "" });
	};

	selectTarefa = (id) => {
		const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
			if (tarefa.id === id) {
				const novaTarefa = {
					...tarefa,
					completa: !tarefa.completa,
				};
				return novaTarefa;
			} else return tarefa;
		});

		this.setState({ tarefas: novaListaDeTarefas });
	};

	deletarTarefa = (id) => {
		const removerTarefaDaLista = this.state.tarefas.filter(
			(tarefa) => {
				// Ele vai pecorrer todo o array checando o id do elemento clicado, o id que for igual é removido pois retorna false.
				return id !== tarefa.id;
			}
		);

		this.setState({ tarefas: removerTarefaDaLista });
	};

	editarTarefa = (id) => {};

	onChangeFilter = (e) => {
		this.setState({ filtro: e.target.value });
	};

	render() {
		const listaFiltrada = this.state.tarefas.filter((tarefa) => {
			switch (this.state.filtro) {
				case "pendentes":
					return !tarefa.completa;
				case "completas":
					return tarefa.completa;
				default:
					return true;
			}
		});

		return (
			<div className="App">
				<TituloTodoList>Lista de tarefas</TituloTodoList>

				<InputsContainer>
					<input
						value={this.state.inputValue}
						onChange={this.onChangeInput}
						placeholder="Adicionar uma nova tarefa"
					/>
					<button onClick={this.criaTarefa}>
						<ImagemButton src={Plus} alt="" />
					</button>
				</InputsContainer>

				<InputContainerSelect>
					<select
						value={this.state.filtro}
						onChange={this.onChangeFilter}
					>
						<option value="">Selecionar Filtro</option>
						<option value="pendentes">Filtro: Pendentes</option>
						<option value="completas">Filtro: Completas</option>
					</select>
				</InputContainerSelect>

				<TarefaListContainter>
					<TarefaList>
						{listaFiltrada.map((tarefa, index) => {
							return (
								<div className="teste">
									<Tarefa
										key={index}
										completa={tarefa.completa}
										onClick={() => this.selectTarefa(tarefa.id)}
									>
										{tarefa.texto}
									</Tarefa>
									<ButtonEdit className="tooltip">
										<span className="tooltiptext">Editar Tarefa</span>
										<img src={Pencil} alt="" />
									</ButtonEdit>
									<ButtonDelete
										className="tooltip"
										onClick={() => this.deletarTarefa(tarefa.id)}
									>
										<span className="tooltiptext">
											Deletar Tarefa
										</span>
										<img src={Trash} alt="" />
									</ButtonDelete>
								</div>
							);
						})}
					</TarefaList>
				</TarefaListContainter>
			</div>
		);
	}
}

export default App;
