import React from "react";
import { ContainerImageButton } from "./Styles";

function ImagemButton(props) {
	return (
		<ContainerImageButton>
			<div className="image-button-container">
				<img src={props.imagem} alt="" />
				<p>{props.texto}</p>
			</div>
		</ContainerImageButton>
	);
}

export default ImagemButton;
