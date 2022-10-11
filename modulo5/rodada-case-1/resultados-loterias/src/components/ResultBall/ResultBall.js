import React from "react";
import {
	Ball,
	BallContainer,
	FooterContainer,
	MainContainer,
} from "./Style";

export function ResultBall({ concursos }) {
	const resultBall = concursos?.numeros?.map((n) => {
		return (
			<Ball key={n}>
				<p>{n}</p>
			</Ball>
		);
	});

	return (
		<MainContainer>
			<BallContainer>{resultBall}</BallContainer>

			<FooterContainer>
				<p>
					Este sorteio é meramente ilustrativo e não possui nenhuma
					ligação com a CAIXA.
				</p>
			</FooterContainer>
		</MainContainer>
	);
}
