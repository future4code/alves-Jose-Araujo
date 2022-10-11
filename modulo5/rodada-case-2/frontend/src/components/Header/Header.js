import React from "react";
import { Form, HeaderContainer } from "./Style";

export function Header() {
	return (
		<HeaderContainer>
			<Form>
				<input placeholder="First name" />
				<input placeholder="Last name" />
				<input placeholder="Participation" />
				<button>SEND</button>
			</Form>
		</HeaderContainer>
	);
}
