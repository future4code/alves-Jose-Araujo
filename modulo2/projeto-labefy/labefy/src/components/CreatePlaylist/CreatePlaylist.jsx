import axios from "axios"
import React, { Component } from "react"

import {ContainerCreatePlaylist} from "./styles"

export default class CreatePlaylist extends Component {
    state = {
        name: ""
    }

    createPlaylist = () => {
        const body = {
            name: this.state.name
        }

        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
                body,
                {
                    headers: {
                        Authorization: "jose-carlos-alves"
                    }
                }
            )
            .then((response) => {
                alert("Playlist criada com sucesso!")
                this.setState({name: ""})
            })
            .catch((error) => {
                alert(error)
            })
        }

    onChangeName = (e) => {
        this.setState({ name: e.target.value })
    }

    render() {
        return (
            <ContainerCreatePlaylist>
                <div className="BoxCreatePlaylist">
                    <h1>Adicionar Música</h1>
                    <input 
                        value={this.state.name}i
                        onChange={this.onChangeName}
                        type={"text"}
                        placeholder="Digite o nome da playlist"
                    />

                    <button onClick={this.createPlaylist}>Confirmar</button>
                </div>
            </ContainerCreatePlaylist>
        )
    }
}
