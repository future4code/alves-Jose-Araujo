import React from "react";
import LoadingGif from "../../assets/loading.gif";
import { ImageContainer } from "./styled";

const Loading = () => {
	return (
		<ImageContainer>
			<img src={LoadingGif} alt="Loading" width={130} />
		</ImageContainer>
	);
};

export default Loading;
