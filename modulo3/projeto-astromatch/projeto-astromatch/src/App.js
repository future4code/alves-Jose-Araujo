import React, { useState } from "react";
import axios from "axios";
import { baseURL, headers } from "./constants";

export default function App() {
	const [profile, setProfile] = useState("");

	const getProfileChoose = () => {
		axios
			.get(`${baseURL}/jose-carlos/person`, headers)
			.then((request) => {
				return setProfile(request.data.profile);
			})
			.catch((erro) => {
				return console.log(erro);
			});
	};

	return (
		<div className="App">
			<h1>AstroMatch</h1>
			<button>Ir para matches</button>

			<hr />

			<h2>Perfis</h2>
			<img src={profile.photo} alt={profile.alt} width={250} />

			<p>{profile.name}</p>
			<p>{profile.age}</p>
			<p>{profile.bio}</p>

			<button onClick={getProfileChoose}>Like</button>
			<button>Dislike</button>
		</div>
	);
}
