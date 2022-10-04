import React from "react";
import {
	Ball,
	BallContainer,
	FooterContainer,
	MainContainer,
} from "./Style";

export function ResultBall() {
	return (
		<MainContainer>
			<BallContainer>
				<Ball>
					<p>06</p>
				</Ball>

				<Ball>
					<p>09</p>
				</Ball>

				<Ball>
					<p>28</p>
				</Ball>

				<Ball>
					<p>33</p>
				</Ball>

				<Ball>
					<p>37</p>
				</Ball>

				<Ball>
					<p>40</p>
				</Ball>
			</BallContainer>

			<FooterContainer>
				<p>
					Este sorteio é meramente ilustrativo e não possui nenhuma
					ligação com a CAIXA.
				</p>
			</FooterContainer>
		</MainContainer>
	);
}
