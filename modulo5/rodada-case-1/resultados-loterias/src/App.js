import React from "react";
import { Header } from "./components/Header/Header";
import { ResultBall } from "./components/ResultBall/ResultBall";

import { ContainerApp, GlobalStyle } from "./styles/Global";

export function App() {
	return (
		<ContainerApp>
			<GlobalStyle />
			<Header />
			<ResultBall />
		</ContainerApp>
	);
}
