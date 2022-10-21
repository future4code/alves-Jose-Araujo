import styled from "styled-components";

export const HeaderContainer = styled.header`
	width: 100%;
	height: 70px;

	position: fixed;
	top: 0;
	z-index: 1000;

	display: flex;
	justify-content: space-around;
	align-items: center;

	background-color: #1a1a1a;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

	a {
		text-decoration: none;

		h1 {
			text-transform: uppercase;
			cursor: pointer;

			color: #ffffffde;
			transition: all 0.2s;

			:hover {
				color: #ffffff;
				filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.8));
			}
		}
	}
`;

export const ContainerButtons = styled.div`
	width: 430px;
`;

export const NewGameButton = styled.button`
	background-color: transparent;
	padding: 10px;

	border: none;
	border-radius: 3px;

	color: #fff;
	text-transform: uppercase;

	font-weight: bold;
	font-size: 14px;
	transition: all 0.2s;

	:hover {
		background-color: #4e4e4e3e;
		border-bottom: 1px solid #ffffffde;
	}
`;
