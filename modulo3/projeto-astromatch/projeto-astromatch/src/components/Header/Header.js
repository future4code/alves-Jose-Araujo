import React from "react";
import { HeaderContainer } from "./Style";

import axios from "axios";
import { toast } from "react-toastify";
import { baseURL } from "../../constants";

import LogoMarca from "../.././img/logo.png";
import FireMatch from "../.././img/fire-match.svg";
import BtnReload from "../.././img/btn-reload.svg";

export default function Header(props) {
	const profileClear = () => {
		axios
			.put(`${baseURL}/jose-carlos/clear`)
			.then((request) => {
				return toast.success("Perfis vistos e matches resetados!");
			})
			.catch((erro) => {
				return toast.error(erro);
			});
	};

	return (
		<HeaderContainer>
			<button onClick={profileClear}>
				<img
					src={BtnReload}
					alt={"Reiniciar Matches e Perfis Vistos"}
				/>
			</button>

			<img src={LogoMarca} alt={"Astromatch"} />

			<button
				onClick={
					props.onScreen === "ListPeople"
						? props.screenListMatch
						: props.screenListPeople
				}
			>
				<img src={FireMatch} alt={"Seus Matches"} />
			</button>
		</HeaderContainer>
	);
}
