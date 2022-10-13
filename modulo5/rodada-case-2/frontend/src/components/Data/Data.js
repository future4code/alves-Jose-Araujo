import React, { useEffect, useState } from "react";
import { DataContainer, DataLogo, TableContainer } from "./Style";
import { Chart } from "react-google-charts";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";

export function Data() {
	const [participations, setParticipations] = useState([]);

	useEffect(() => {
		axios
			.get(`${BASE_URL}/getAllUsers`)
			.then((res) => {
				setParticipations(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	}, [setParticipations]);

	const data = [["", ""]];
	const options = {
		pieHole: 0.5,
		is3D: false,
	};

	participations.forEach((participant) => {
		return data.push([
			`${participant.firstName} ${participant.lastName}`,
			+participant.participation,
		]);
	});

	const getParticipations = participations?.map((participation) => {
		const position = participations.indexOf(participation) + 1;

		return (
			<tr key={participation.id}>
				<td>{position}</td>
				<td>{participation.firstName}</td>
				<td>{participation.lastName}</td>
				<td>{participation.participation}%</td>
			</tr>
		);
	});

	return (
		<DataContainer>
			<DataLogo>
				<h1>DATA</h1>
				<p>Lorem Ipsum is simply dummy text of the printing.</p>
			</DataLogo>
			<TableContainer>
				{getParticipations.length ? (
					<table>
						<tr>
							<th></th>
							<th scope="col">First name</th>
							<th scope="col">Last name</th>
							<th scope="col">Participation</th>
						</tr>

						{getParticipations}
					</table>
				) : (
					<h1>No data found!</h1>
				)}

				<Chart
					chartType="PieChart"
					data={data}
					options={options}
					width={"600px"}
					height={"400px"}
				/>
			</TableContainer>
		</DataContainer>
	);
}
