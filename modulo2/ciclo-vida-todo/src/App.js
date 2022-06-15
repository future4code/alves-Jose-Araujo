import React from "react";
import "./styles.css";
import {
	TarefaList,
	Tarefa,
	TarefaListContainter,
	InputsContainer,
	InputContainerSelect,
	TituloTodoList,
	ButtonDelete,
	ButtonEdit,
	ImagemButton,
} from "./Style";

import Plus from "./img/plus.svg";
import Trash from "./img/trash.svg";
import Pencil from "./img/pencil.svg";

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
