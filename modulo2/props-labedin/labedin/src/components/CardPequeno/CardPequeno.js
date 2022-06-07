import React from "react";
import "./CardPequeno.css";
import EmailIcon from "../.././img/envelope.svg";
import AddressIcon from "../.././img/map-pin.svg";

export function CardPequeno({ email, endereco }) {
	return (
		<section>
			<div className="info info-email">
				<img src={EmailIcon} />
				<h4>E-mail:</h4>
				<p>{email}</p>
			</div>

			<div className="info info-endereco">
				<img src={AddressIcon} />
				<h4>Endereço:</h4>
				<p>{endereco}</p>
			</div>
		</section>
	);
}
