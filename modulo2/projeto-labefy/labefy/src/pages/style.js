import styled from "styled-components";

export const ContainerHome = styled.section`
	width: 50%;
	height: 100vh;

	display: grid;
	grid-template-columns: repeat(3, 1fr);

	justify-content: center;
	align-content: center;

	margin: 0 auto;
	gap: 20px;

	ul {
		display: flex;
		align-items: center;
		justify-content: center;

		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
		background: rgb(36, 36, 36);

		border-radius: 5px;
		list-style: none;

		padding: 50px;
		transition: opacity 0.2s;

		li {
			display: flex;
			justify-content: center;

			align-items: center;
			flex-direction: column;
			color: white;

			span {
				width: 120px;
				height: 120px;

				display: flex;
				justify-content: center;
				align-items: center;

				border-radius: 50%;
				background-color: #cdf27e;

				margin-bottom: 20px;
				transition: transform 0.2s;
			}
		}

		:hover {
			opacity: 0.5;
		}

		button {
			padding: 10px 45px;
			margin-top: 20px;

			font-weight: 700;
			text-transform: uppercase;

			font-family: "Poppins", sans-serif;
			background-color: black;

			color: #cdf27e;
			border-radius: 5px;

			border: none;
			transition: opacity 0.2s;

			:hover {
				opacity: 0.5;
			}
		}
	}
`;
