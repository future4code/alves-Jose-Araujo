import React from "react";
import LogoMegaSena from "../../images/logo_mega_sena.svg";

import * as s from "./Style";

export function Header({ setLoteria, loteria, concursos }) {
	return (
		<s.MainContainer>
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
					<img src={LogoMegaSena} alt="Logo" />
					<h3>{loteria.toUpperCase()}</h3>
				</s.HeaderLogo>

				<s.Footer>
					<div>
						<p>CONCURSO</p>
						<h4>
							{concursos.id} -{" "}
							{concursos?.data
								?.substr(0, 10)
								.split("-")
								.reverse()
								.join("/")}
						</h4>
					</div>
				</s.Footer>
			</s.ItemsContainer>
		</s.MainContainer>
	);
}
