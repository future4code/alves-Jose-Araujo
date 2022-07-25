import { ThemeProvider } from "@mui/material";
import { GlobalStyle } from "./Global";
import Router from "./router/Router";
import theme from "./constants/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	);
}

export default App;
