import styled from "styled-components";

export const TarefaList = styled.ul`
	text-align: left;
	width: 100%;
	padding: 0;
`;

export const Tarefa = styled.li`
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

export const InputsContainer = styled.div`
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

export const InputContainerSelect = styled.div`
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

export const TituloTodoList = styled.h1`
	width: 90%;
	height: 7vh;

	padding: 5px;
	margin: 15px 0;

	border: 2px solid #2196f3;
	border-radius: 5px;
	color: #2196f3;
`;

export const ButtonDelete = styled.button`
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

export const ButtonEdit = styled.button`
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

export const TarefaListContainter = styled.div`
	margin-top: 20px;
	width: 90%;
`;

export const ImagemButton = styled.img`
	width: 25px;
`;
