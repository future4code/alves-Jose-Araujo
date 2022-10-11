import styled from "styled-components";

export const MainContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;
`;

export const BallContainer = styled.div`
	display: flex;
	justify-content: center;

	align-items: center;
	flex-wrap: wrap;
	gap: 30px;
`;

export const Ball = styled.div`
	width: 106px;
	height: 106px;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 50%;
	background-color: #fff;

	box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 4px;
	color: #333333;

	p {
		font-weight: bold;
		font-size: 25px;
	}
`;

export const FooterContainer = styled.div`
	position: fixed;
	bottom: 15%;
`;
