import React from "react";
import "./CardGrande.css";
import { BigCardContainer } from "./Styles";

function CardGrande(props) {
	return (
		<BigCardContainer>
			<div className="bigcard-container">
				<img src={props.imagem} alt="" />
				<div>
					<h4>{props.nome}</h4>
					<p>{props.descricao}</p>
				</div>
			</div>
		</BigCardContainer>
	);
}

export default CardGrande;
