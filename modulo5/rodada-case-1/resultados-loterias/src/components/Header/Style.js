import styled from "styled-components";
import sidebar from "../../images/sidebar.svg";

export const MainContainer = styled.div`
	/* Sidebar */
	width: 50%;
	height: 100vh;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: space-around;

	background: url(${sidebar}) no-repeat;

	@media (max-width: 990px) {
		width: 100%;
		height: 50vh;
	}
`;

export const ItemsContainer = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;

	align-items: flex-start;
	justify-content: space-around;
	margin-left: 35%;
`;

export const Select = styled.div`
	select {
		width: 100%;
		padding: 10px 45px 10px 15px;

		border: 1px solid #e8eaed;
		border-radius: 10px;

		background: white;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
		cursor: pointer;

		&:focus {
			outline: none;
			border-color: #9098a9;
		}
	}
`;

export const HeaderLogo = styled.div`
	color: white;
	display: flex;
	justify-content: center;

	align-items: center;
	gap: 20px;
`;

export const Footer = styled.div`
	color: white;
`;
