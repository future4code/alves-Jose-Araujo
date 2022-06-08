import React, { Component } from "react";
import styled from "styled-components";
import facebookLogo from "../../img/facebook.png";
import instagramLogo from "../../img/instagram.png";
import twitterLogo from "../../img/twitter.png";

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 5px;
`;

const ShareImage = styled.img`
	padding: 5px 5px;
	border: 1px solid black;
	margin: 5px 10px;
	height: 20%;
`;

export default class SecaoCompartilhar extends Component {
	render() {
		return (
			<ButtonContainer>
				<ShareImage src={facebookLogo} />
				<ShareImage src={instagramLogo} />
				<ShareImage src={twitterLogo} />
			</ButtonContainer>
		);
	}
}
