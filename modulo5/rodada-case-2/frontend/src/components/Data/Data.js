import React from "react";
import { DataContainer, DataLogo, TableContainer } from "./Style";
import { Chart } from "react-google-charts";

export const data = [
	["Task", "Hours per Day"],
	["Work", 11],
	["Eat", 2],
	["Commute", 2],
	["Watch TV", 2],
	["Sleep", 7],
];

export const options = {
	pieHole: 0.4,
	is3D: false,
};

export function Data() {
	return (
		<DataContainer>
			<DataLogo>
				<h1>DATA</h1>
				<p>Lorem Ipsum is simply dummy text of the printing.</p>
			</DataLogo>
			<TableContainer>
				<table>
					<tr>
						<th></th>
						<th scope="col">First name</th>
						<th scope="col">Last name</th>
						<th scope="col">Participation</th>
					</tr>

					<tr>
						<td>1</td>
						<td>Carlos</td>
						<td>Moura</td>
						<td>5%</td>
					</tr>

					<tr>
						<td>2</td>
						<td>Fernanda</td>
						<td>Oliveira</td>
						<td>15%</td>
					</tr>

					<tr>
						<td>3</td>
						<td>Hugo</td>
						<td>Silva</td>
						<td>30%</td>
					</tr>
				</table>

				<Chart
					chartType="PieChart"
					data={data}
					options={options}
					width={"600px"}
					height={"350px"}
					background-color={"red"}
				/>
			</TableContainer>
		</DataContainer>
	);
}
