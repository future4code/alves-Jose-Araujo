import styled from "styled-components";

export const ContainerAdminList = styled.div`
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

	section {
		width: 100%;

		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;

		ul {
			width: 100%;
			display: flex;

			align-items: center;
			justify-content: center;

			flex-wrap: wrap;
			gap: 10px;
			margin: 15px 0;

			li {
				width: 500px;
				height: 70px;
				display: flex;

				justify-content: space-between;
				align-items: center;

				padding: 20px;
				border-radius: 5px;

				background-color: var(--btn-primary-color);
				transition: background-color 0.2s;

				.teste {
					display: flex;

					button {
						width: 45px;
						height: 45px;

						display: flex;
						justify-content: center;

						align-items: center;
						border-radius: 50px;

						background-color: transparent;
						transition: background-color 0.2s;

						:hover {
							background-color: var(--btn-primary-color);
						}
					}
				}

				:hover {
					background-color: var(--btn-secondary-color);
					cursor: pointer;
				}
			}
		}
	}
`;

export const ContainerCreateTrip = styled.div`
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
	}

	form {
		width: 75%;
		height: 50vh;

		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;

		input,
		select {
			width: 400px;
			padding: 12px;
			margin: 10px;

			background-color: var(--txt-primary-color);
			border: none;
			border-radius: 5px;

			outline-color: var(--btn-secondary-color);
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
`;
