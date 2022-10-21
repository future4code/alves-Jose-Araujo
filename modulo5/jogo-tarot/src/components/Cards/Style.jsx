import styled from "styled-components";

export const ContainerTarotCards = styled.main`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TarotCards = styled.div`
	width: 84%;
	height: 100%;

	display: flex;
	justify-content: center;

	align-items: center;
	flex-wrap: wrap;

	padding: 100px 0 30px 0;
	gap: 30px;
`;

export const ImageTarot = styled.img`
	height: 255px;
	width: 165px;

	border-radius: 3px;
	border: 9px solid #4e4e4e;
	background-color: #4e4e4e;

	box-shadow: rgb(0 0 0 / 25%) 0px 14px 28px,
		rgb(0 0 0 / 22%) 0px 10px 10px;
	cursor: pointer;
	transition: all 0.2s;

	:hover {
		filter: drop-shadow(0px 0px 9px #686868);
		transform: scale(1.05);
	}
`;
