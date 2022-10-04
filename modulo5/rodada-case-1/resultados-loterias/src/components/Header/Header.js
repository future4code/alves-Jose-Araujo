import React from "react";
import LogoMegaSena from "../../images/logo_mega_sena.svg";

import * as s from "./Style";

export function Header() {
	return (
		<s.MainContainer>
			<s.ItemsContainer>
				<s.Select>
					<form action="/">
						<select name="cars" id="cars">
							<option value="volvo">MEGA-SENA</option>
							<option value="saab">QUINA</option>
							<option value="opel">LOTOFACIL</option>
							<option value="audi">LOTOMANIA</option>
							<option value="audi">TIMEMANIA</option>
							<option value="audi">DIA DE SORTE</option>
						</select>
					</form>
				</s.Select>

				<s.HeaderLogo>
					<img src={LogoMegaSena} alt="" />
					<h3>MEGA-SENA</h3>
				</s.HeaderLogo>

				<s.Footer>
					<div>
						<p>CONCURSO</p>
						<h4>4531 - 07/04/2022</h4>
					</div>
				</s.Footer>
			</s.ItemsContainer>
		</s.MainContainer>
	);
}
