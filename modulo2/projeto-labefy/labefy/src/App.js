import React, { Component } from "react";
import styled from "styled-components";

import CreatePlaylist from "./components/CreatePlaylist";
import GetAllPlaylists from "./components/GetAllPlaylists";

const ContainerApp = styled.main``;

export default class App extends Component {
	render() {
		return (
			<ContainerApp>
				<CreatePlaylist />
				<GetAllPlaylists />
			</ContainerApp>
		);
	}
}
