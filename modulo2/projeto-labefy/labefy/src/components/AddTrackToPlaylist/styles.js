import styled from "styled-components";

export const ContainerAddTrack = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;

	flex-direction: column;
	align-items: center;

	.BoxCreateTrack {
		width: 40%;
		height: 50vh;

		display: flex;
		align-items: center;

		justify-content: space-evenly;
		flex-direction: column;

		border-radius: 5px;
		background-color: #242424;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

		h1 {
			color: white;
			margin-bottom: 10px;
		}

		span {
			display: flex;
			justify-content: center;
			align-items: center;

			width: 120px;
			height: 120px;

			border-radius: 50%;
			transition: animation 0.2s;

			background-color: #cdf27e;
			box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
				rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

			:hover {
				animation: spin 1.2s linear infinite;
			}
		}

		input,
		button {
			width: 50%;
			border: none;

			font-family: "Poppins", sans-serif;
			padding: 15px;
			border-radius: 5px;
		}

		input {
			border: 1px solid #f2f2f2;
			background-color: #fcfcfc;
		}

		button {
			color: #cdf27e;
			background-color: black;

			font-weight: bold;
			text-transform: uppercase;
			transition: opacity 0.2s;

			:hover {
				opacity: 0.7;
			}
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const TrackContainer = styled.section`
	section {
		iframe {
			border: 1px dashed #cdf27e;
		}

		p {
			color: #f2f2f2;
		}

		button {
			color: #cdf27e;
			background-color: black;

			margin-top: 10px;
			border-radius: 4px;
			padding: 10px;

			font-weight: bold;
			text-transform: uppercase;
			transition: opacity 0.2s;

			:hover {
				opacity: 0.7;
			}
		}
	}
`;
