import styled from "styled-components";

export const ContainerTripsList = styled.section`
	width: 100%;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	header {
		width: 100%;
		height: 150px;

		display: flex;
		align-items: center;

		justify-content: space-around;

		h1 {
			font-size: 2rem;
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
	}

	ul {
		width: 100%;
		display: flex;

		align-items: center;
		justify-content: center;

		flex-wrap: wrap;
		gap: 10px;
		margin: 15px 0;

		li {
			width: 800px;
			padding: 20px;
			border-radius: 5px;

			background-color: var(--btn-primary-color);
			transition: background-color 0.2s;

			:hover {
				background-color: var(--btn-secondary-color);
				cursor: pointer;
			}
		}
	}
`;
