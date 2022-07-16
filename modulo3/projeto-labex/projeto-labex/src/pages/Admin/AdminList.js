import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ContainerAdminList } from "./Style";
import {
	goToAdminCreate,
	goToAdminDetails,
	goToHome,
} from "../../routes/Coordinator";

import { Eye, Trash } from "phosphor-react";
import { BASE_URL } from "../.././constants/BASE_URL";

export default function AdminPage() {
	const navigate = useNavigate();
	const [tripsList, setTripsList] = useState([]);

	useEffect(() => {
		axios
			.get(`${BASE_URL}/trips`)
			.then((response) => {
				setTripsList(response.data.trips);
			})
			.catch((error) => {
				console.log(error.response);
			});
	}, [tripsList]);

	useEffect(() => {
		const token = localStorage.getItem("token");

		token === null
			? navigate("/login")
			: navigate("/admin/trips/list");
	}, [navigate]);

	const deleteTrip = (id) => {
		const token = localStorage.getItem("token");

		axios
			.delete(`${BASE_URL}/trips/${id}`, {
				headers: {
					auth: token,
				},
			})
			.then((response) => {
				alert("Trip deletada com sucesso!");
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	return (
		<ContainerAdminList>
			<header>
				<h1>Painel Administrativo</h1>
				<div>
					<button onClick={() => goToHome(navigate)}>Voltar</button>
					<button onClick={() => goToAdminCreate(navigate)}>
						Criar Viagem
					</button>
					<button>Logout</button>
				</div>
			</header>

			<section>
				{tripsList?.map((trip) => {
					return (
						<ul key={trip.id}>
							<li>
								<p>{trip.name}</p>
								<div className="teste">
									<button
										onClick={() =>
											goToAdminDetails(navigate, trip.id)
										}
									>
										<Eye size={32} color="#F3F4F5" weight="fill" />
									</button>
									<button onClick={() => deleteTrip(trip.id)}>
										<Trash size={32} color="#F3F4F5" weight="fill" />
									</button>
								</div>
							</li>
						</ul>
					);
				})}
			</section>
		</ContainerAdminList>
	);
}
