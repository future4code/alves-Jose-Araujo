import React from "react";
import { SectionCardPequeno } from "./Styles";
import EmailIcon from "../.././img/envelope.svg";
import AddressIcon from "../.././img/map-pin.svg";

export function CardPequeno({ email, endereco }) {
	return (
		<SectionCardPequeno>
			<div className="info info-email">
				<img src={EmailIcon} alt="" />
				<h4>E-mail:</h4>
				<p>{email}</p>
			</div>

			<div className="info info-endereco">
				<img src={AddressIcon} alt="" />
				<h4>Endereço:</h4>
				<p>{endereco}</p>
			</div>
		</SectionCardPequeno>
	);
}
