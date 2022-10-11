import { Data } from "./components/Data/Data";
import { Header } from "./components/Header/Header";
import { GlobalStyle, MainContainer } from "./style/Global";

export function App() {
	return (
		<MainContainer>
			<GlobalStyle />
			<Header />
			<Data />
		</MainContainer>
	);
}
