import React from "react";
import { GlobalStyle } from "./Global.js";
import { Router } from "./routes/Router.js";

function App() {
	return (
		<>
			<GlobalStyle />
			<Router />
		</>
	);
}

export default App;
