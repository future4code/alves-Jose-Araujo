import styled from "styled-components";

export const DataContainer = styled.div`
	width: auto;
	height: 85%;
`;

export const DataLogo = styled.div`
	width: 100%;
	height: 10vh;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const TableContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 40%;
	}

	th,
	td {
		border: 1px solid #dddddd;
		color: #5c5c5c;

		text-align: center;
		padding: 8px;
	}
`;
