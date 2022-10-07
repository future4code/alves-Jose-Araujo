import React from "react";
import LogoMegaSena from "../../images/logo_mega_sena.svg";

import * as s from "./Style";

export function Header({ setLoteria, loteria, concursos }) {
	return (
		<s.MainContainer loteria={loteria}>
			<div>
				<svg
					width="613"
					height="1080"
					viewBox="0 0 613 1080"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z" />
				</svg>
			</div>
			<s.ItemsContainer>
				<s.Select>
					<select onChange={(e) => setLoteria(e.target.value)}>
						<option value="mega-sena">MEGA-SENA</option>
						<option value="quina">QUINA</option>
						<option value="lotofácil">LOTOFÁCIL</option>
						<option value="lotomania">LOTOMANIA</option>
						<option value="timemania">TIMEMANIA</option>
						<option value="dia de sorte">DIA DE SORTE</option>
					</select>
				</s.Select>

				<s.HeaderLogo>
					<img src={LogoMegaSena} alt="logo" />

					<h3>{loteria.toUpperCase()}</h3>
				</s.HeaderLogo>

				<s.Footer>
					<p>CONCURSO</p>
					<h4>
						{concursos?.id} -{" "}
						{concursos?.data
							?.substr(0, 10)
							.split("-")
							.reverse()
							.join("/")}
					</h4>
				</s.Footer>
			</s.ItemsContainer>
		</s.MainContainer>
	);
}
