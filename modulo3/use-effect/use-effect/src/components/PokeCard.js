import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CardPokemon = styled.div`
	width: 250px;
	display: flex;

	justify-content: space-between;

	padding: 0 10px;
	background: #f2f2f2;

	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	border-radius: 5px;
	transition: transform 0.2s;

	:hover {
		transform: scale(1.05);
	}

	.text-box {
		display: flex;
		justify-content: center;
		flex-direction: column;

		color: #313131;

		p {
			display: flex;
			align-items: center;
			justify-content: center;

			text-transform: capitalize;
		}

		.text-weight {
			min-width: 100px;
			height: 20px;

			border-radius: 3px;
			text-align: center;

			font-size: 13px;
			margin: 7px 0;

			background: linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
			background-color: #9bcc50;
		}

		.text-type {
			min-width: 100px;
			height: 20px;

			border-radius: 3px;
			text-align: center;

			font-size: 13px;
			color: white;

			background: linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
			background-color: #b97fc9;
		}
	}
`;

const PokemonImage = styled.img`
	max-width: 200px;
	object-fit: cover;
`;

function PokeCard(props) {
	// Passo 4b
	// Implementa suas variáveis de estado aqui.
	const [pokemon, setPokemon] = useState({});

	// Passo 4c
	// componentDidMount() {
	//   this.pegaPokemon(this.props.pokeName);
	// };

	useEffect(() => {
		pegaPokemon(props.pokemonName);
	}, []);

	// Passo 4c
	// componentDidUpdate(prevProps) {
	//   if (prevProps.pokeName !== this.props.pokeName) {
	//     this.pegaPokemon(this.props.pokeName);
	//   };
	// };

	// Passo 4c
	const pegaPokemon = (pokeName) => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
			.then((res) => {
				setPokemon(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<CardPokemon>
				<div className="text-box">
					<strong>
						{pokemon.name && pokemon.name.toUpperCase()}
					</strong>
					<p className="text-weight">{+pokemon.weight} Kg</p>
					<p className="text-type">
						{pokemon.types && pokemon.types[0].type.name}
					</p>
				</div>

				{pokemon.sprites && (
					<PokemonImage
						src={pokemon.sprites.front_default}
						alt={pokemon.name}
					/>
				)}
			</CardPokemon>
		</>
	);
}

export default PokeCard;
