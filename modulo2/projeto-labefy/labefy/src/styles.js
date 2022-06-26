import styled from "styled-components";

export const ContainerApp = styled.main`
	display: flex;

	nav {
		width: 15%;
		height: 100vh;
		background-color: #000;

		h1 {
			color: white;
			text-align: left;
			margin: 20px 20px;
		}

		hr {
			margin: 0 auto;
			width: 220px;

			opacity: 0.2;
			margin-top: 20px;
			margin-bottom: 20px;
		}

		li {
			width: 100%;
			display: flex;
			align-items: center;

			font-size: 0.875rem;
			color: #b3b3b3;
			transition: filter 0.2s;

			height: 40px;
			padding: 0 16px;
			font-weight: 400;

			span {
				width: 25px;
				margin-right: 15px;
			}

			p {
				font-weight: 500;
			}

			.btn-plus {
				display: flex;
				justify-content: center;

				border-radius: 2px;
				padding: 5px;

				background-color: #b3b3b3;
			}

			.btn-music {
				display: flex;
				justify-content: center;

				border-radius: 2px;
				padding: 5px;

				opacity: 0.8;
				background: linear-gradient(140deg,#450af5,#c4efd9);
			}

			:hover {
				filter: brightness(1.5);
				cursor: pointer;
			}
		}
	}
`;