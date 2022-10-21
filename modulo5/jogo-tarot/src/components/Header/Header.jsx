import * as s from "./Style";

export function Header({ onFlipCard }) {
	return (
		<s.HeaderContainer>
			<a href="/">
				<h1>Tarot do Dia</h1>
			</a>
			<s.ContainerButtons>
				<s.NewGameButton onClick={onFlipCard}>
					Novo Jogo
				</s.NewGameButton>
				<s.NewGameButton
					onClick={() => alert("Ainda em construção!")}
				>
					Como Jogar
				</s.NewGameButton>
				<s.NewGameButton
					onClick={() => alert("Ainda em construção!")}
				>
					Significado das Cartas
				</s.NewGameButton>
			</s.ContainerButtons>
		</s.HeaderContainer>
	);
}
