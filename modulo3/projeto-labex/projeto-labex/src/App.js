import React from "react";
import { GlobalStyle } from "./Global.js";
import { Router } from "./routes/Router.js";
import styled from "styled-components";

const ContainerApp = styled.main`
	display: flex;
	justify-content: center;

	align-items: center;
	flex-direction: column;
`;

function App() {
	return (
		<ContainerApp>
			<GlobalStyle />
			<Router />
		</ContainerApp>
	);
}

export default App;
