import styled from "styled-components";

export const SectionCardPequeno = styled.section`
	.info {
		align-items: center;
		display: flex;

		padding: 15px;
		margin-top: 10px;
	}

	.info > h4 {
		margin-right: 5px;
	}

	.info > img {
		background-color: black;
		color: white;

		padding: 5px;
		border-radius: 50%;
	}

	.info-email,
	.info-endereco {
		border: 1px solid black;
	}

	img {
		margin-right: 5px;
		width: 35px;
	}
`;
