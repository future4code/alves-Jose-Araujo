import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

const AppContainer = styled.main`
	text-align: center;
`;

const ButtonNextStep = styled.button`
	margin-top: 15px;
`;

function App() {
	return (
		<AppContainer>
			{/* <Etapa1 /> */}
			{/* <Etapa2 /> */}
			{/* <Etapa3 /> */}
			<Final />
			<ButtonNextStep>Próxima etapa</ButtonNextStep>
		</AppContainer>
	);
}

export default App;
