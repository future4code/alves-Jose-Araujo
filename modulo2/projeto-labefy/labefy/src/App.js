import React, { Component } from "react";
import styled from "styled-components";
import CreatePlaylist from "./components/CreatePlaylist";

const ContainerApp = styled.main``;

export default class App extends Component {
	render() {
		return (
			<ContainerApp>
				<CreatePlaylist />
			</ContainerApp>
		);
	}
}
