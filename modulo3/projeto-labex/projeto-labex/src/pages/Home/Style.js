import styled from "styled-components";

export const ContainerHome = styled.section`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	h1 {
		font-size: 3rem;
	}

	button {
		width: 140px;
		height: 40px;

		font-weight: 400;
		border-radius: 50px;

		margin: 10px;
		background-color: var(--btn-primary-color);
		transition: all 200ms;

		:hover {
			background-color: var(--btn-secondary-color);
			transform: scale(1.05);
		}
	}
`;
