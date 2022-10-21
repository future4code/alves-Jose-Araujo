import styled from "styled-components";

export const ModalContainer = styled.div`
	width: 100%;
	height: 100%;

	background: rgba(0, 0, 0, 0.8);
	position: fixed;

	top: 0;
	bottom: 0;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalWrapper = styled.div`
	width: 800px;
	height: 500px;

	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: #000;

	position: relative;
	z-index: 10;
	border-radius: 10px;

	display: grid;
	grid-template-columns: 1fr 1fr;

	justify-items: center;
	align-items: center;
`;

export const ModalImg = styled.img`
	height: 400px;
	width: 250px;

	border: 5px solid black;
	border-radius: 5px;

	background: #000;
	box-shadow: rgb(0 0 0 / 25%) 0px 14px 28px,
		rgb(0 0 0 / 22%) 0px 10px 10px;
	cursor: pointer;
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	line-height: 1.8;
	color: #141414;

	p {
		margin-bottom: 1rem;
	}

	button {
		padding: 10px 24px;
		background: #141414;

		border: none;
		border-radius: 5px;

		color: #fff;
		text-transform: uppercase;
		font-weight: 400;
		transition: opacity 0.2s;

		:hover {
			opacity: 0.85;
		}
	}
`;

export const CloseModalButton = styled.button`
	width: 32px;
	height: 32px;

	cursor: pointer;
	position: absolute;

	top: 20px;
	right: 20px;

	padding: 0;
	z-index: 10;

	border: none;
	border-radius: 50%;

	background-color: black;
	text-align: center;
	transition: opacity 0.2s;

	:hover {
		opacity: 0.85;
	}

	span {
		font-size: 16px;
		font-weight: bold;
		color: #fff;
	}
`;
