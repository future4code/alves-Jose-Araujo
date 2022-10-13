import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/BASE_URL";
import { useForm } from "../../hooks/useForm";
import { Form, HeaderContainer } from "./Style";

export function Header() {
	const { form, onChange, cleanFields } = useForm({
		firstName: "",
		lastName: "",
		participation: "",
	});

	const createParticipation = (body) => {
		axios
			.post(`${BASE_URL}/create`, body)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	const submitParticipation = (e) => {
		const body = {
			firstName: form.firstName,
			lastName: form.lastName,
			participation: +form.participation,
		};

		e.preventDefault();
		cleanFields();
		createParticipation(body);
	};

	return (
		<HeaderContainer>
			<Form onSubmit={submitParticipation}>
				<input
					placeholder={"First name"}
					name={"firstName"}
					value={form.firstName}
					onChange={onChange}
				/>
				<input
					placeholder="Last name"
					name={"lastName"}
					value={form.lastName}
					onChange={onChange}
				/>
				<input
					placeholder="Participation"
					type={"number"}
					name={"participation"}
					value={form.participation}
					onChange={onChange}
					min="1"
					max="100"
				/>
				<button type={"submit"}>SEND</button>
			</Form>
		</HeaderContainer>
	);
}
