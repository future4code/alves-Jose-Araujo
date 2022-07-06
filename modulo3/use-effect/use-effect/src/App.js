import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./Global";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import styled from "styled-components";

const ContainerPokemon = styled.main`
	width: 100%;
	height: 100vh;

	display: flex;
	justify-content: center;

	align-items: center;
	gap: 20px;
	flex-wrap: wrap;
`;

const HeaderContainer = styled.header`
	width: 100%;
	height: 60px;

	display: flex;
	align-items: center;
	justify-content: center;

	h1 {
		color: grey;
		font-weight: lighter;
		text-align: center;
	}
`;

function App() {
	// Passo 3b
	// Implemente suas variáveis de estado aqui.
	const [pokeList, setPokeList] = useState([]);
	const [pokeName, setPokeName] = useState("");

	// Passo 3c
	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
			.then((res) => {
				// Alteração do estado, armazenando a resposta da requisição solicitada.
				setPokeList(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// Passo 3a
	const changePokeName = (e) => {
		// Passo 3d
		// Implementa a função aqui.
		setPokeName(e.target.value);
	};

	// Passo 3e
	const pokeOptions = pokeList.map((pokemon) => {
		return (
			<PokeCard pokemonName={pokemon.name} />
			// <option key={pokemon.name} value={pokemon.name}>
			// 	{pokemon.name}
			// </option>
		);
	});

	// Passo 4a
	// const pokemon = pokeName && <PokeCard pokeName={pokeName} />;

	return (
		<>
			<GlobalStyle />
			<HeaderContainer>
				<h1>Pokédex</h1>
			</HeaderContainer>

			{/* <nav>
				<label htmlFor={"select-pokemon"}>
					Selecione um pokemon:
				</label>
				<select id={"select-pokemon"} onChange={changePokeName}>
					<option value={""}>Nenhum</option>
					{pokeOptions}
				</select>
			</nav> */}

			<ContainerPokemon>{pokeOptions}</ContainerPokemon>
		</>
	);
}

export default App;
