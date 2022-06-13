import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import { CardPequeno } from "./components/CardPequeno/CardPequeno";
import ArrowFat from "./img/arrow-fat-down-bold.svg";

function App() {
	return (
		<div className="App">
			<div className="page-section-container">
				<h2>Dados pessoais</h2>
				<CardGrande
					imagem="https://avatars.githubusercontent.com/u/46418534?v=4"
					nome="José Carlos Alves de Lima Araújo"
					descricao="Oi, eu sou José Carlos. Sou aluno da Labenu. Atualmente estou estudando na labenu trilha web full stack."
				/>

				<ImagemButton imagem={ArrowFat} texto="Ver mais" />

				<CardPequeno
					email="carlosaaraujopc@gmail.com"
					endereco="Rua Labenu, 92"
				/>
			</div>

			<div className="page-section-container">
				<h2>Experiências profissionais</h2>
				<CardGrande
					imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
					nome="Labenu"
					descricao="Formando desenvolvedores para o mercado de trabalho!"
				/>

				<CardGrande
					imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
					nome="NASA"
					descricao="Apontando defeitos."
				/>
			</div>

			<div className="page-section-container">
				<h2>Minhas redes sociais</h2>
				<ImagemButton
					imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
					texto="Facebook"
				/>

				<ImagemButton
					imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
					texto="Twitter"
				/>
			</div>
		</div>
	);
}

export default App;
