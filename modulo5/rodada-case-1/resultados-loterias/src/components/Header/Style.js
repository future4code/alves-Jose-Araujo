import styled from "styled-components";

export const MainContainer = styled.div`
	/* Sidebar */
	width: 50%;
	height: 100vh;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: space-around;
	position: relative;

	svg {
		height: 100vh;
		position: absolute;
		left: -10%;
		right: 0%;
		top: 0%;
		bottom: 0%;
		fill: #6befa3;

		fill: ${({ loteria }) => {
			switch (loteria) {
				case "mega-sena":
					return "#6BEFA3;";
				case "quina":
					return "#8666EF;";
				case "lotofácil":
					return "#DD7AC6;";
				case "lotomania":
					return "#FFAB64;";
				case "timemania":
					return "#5AAD7D;";
				case "dia de sorte":
					return "#BFAF83;";
				default:
					break;
			}
		}};
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

	z-index: 1;
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
