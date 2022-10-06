import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { ResultBall } from "./components/ResultBall/ResultBall";
import {
	Concursos,
	Loterias,
	LoteriasConcursos,
} from "./services/loterias";

import { ContainerApp, GlobalStyle } from "./styles/Global";

export function App() {
	const [loteria, setLoteria] = useState("mega-sena");

	const todasLoterias = Loterias();
	const filterLoterias = todasLoterias?.find(
		(loterias) => loterias?.nome === loteria.toLowerCase()
	);

	const concursosLoteria = LoteriasConcursos();
	const filterConcursos = concursosLoteria?.find(
		(concurso) => filterLoterias?.id === concurso.loteriaId
	);

	const id = filterConcursos?.concursoId;
	const concursos = Concursos(id);

	return (
		<ContainerApp>
			<GlobalStyle />
			<Header
				loteria={loteria}
				setLoteria={setLoteria}
				concursos={concursos}
			/>
			<ResultBall concursos={concursos} />
		</ContainerApp>
	);
}
