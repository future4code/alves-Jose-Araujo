import React, { Component } from "react";
import styled from "styled-components";

import CreateUser from "./components/CreateUser";
import UsersList from "./components/UsersList";

const ContainerApp = styled.section``;

export default class App extends Component {
	state = {
		onScreen: "CreateUser",
	};

	changeSreen = () => {
		switch (this.state.onScreen) {
			case "CreateUser":
				return <CreateUser screenUserList={this.screenUserList} />;
			case "UsersList":
				return <UsersList screenCreateUser={this.screenCreateUser} />;
			default:
				return <section>Nenhuma teka foi encontrada!</section>;
		}
	};

	screenCreateUser = () => {
		this.setState({ onScreen: "CreateUser" });
	};

	screenUserList = () => {
		this.setState({ onScreen: "UsersList" });
	};

	render() {
		return <ContainerApp>{this.changeSreen()}</ContainerApp>;
	}
}
