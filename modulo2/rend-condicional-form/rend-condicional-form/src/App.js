import styled from "styled-components";

const AppContainer = styled.main`
	text-align: center;
`;

const FormContainer = styled.section``;

const ButtonNextStep = styled.button`
	margin-top: 10px;
`;

function App() {
	return (
		<AppContainer>
			<FormContainer>
				<h3>ETAPA 1 - DADOS GERAIS</h3>
				<p>1. Qual o seu nome?</p>
				<input type="text" placeholder="Digite o seu nome" />
				<p>2. Qual sua idade?</p>
				<input type="number" placeholder="Digite a sua idade" />
				<p>3. Qual seu email?</p>
				<input type="text" placeholder="Digite o seu email" />
				<p>4. Qual a sua escolaridade?</p>
				<select name="cars" id="cars">
					<option value="volvo">Ensino médio incompleto</option>
					<option value="saab">Ensino médio completo</option>
					<option value="mercedes">Ensino superior incompleto</option>
					<option value="audi">Ensino superior completo</option>
				</select>
			</FormContainer>
			<ButtonNextStep>Próxima etapa</ButtonNextStep>
		</AppContainer>
	);
}

export default App;
