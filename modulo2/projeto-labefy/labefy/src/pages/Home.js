import React, { Component } from 'react'
import { ContainerHome } from "./style"
import axios from "axios";
import {Playlist} from "phosphor-react"

export default class Home extends Component {
    state = {
        allPlaylist: [],
    }

    componentDidMount() {
        this.getPlaylists()
    }

    getPlaylists = () => {
        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            {
                headers: {
                    Authorization: "jose-carlos-alves"
                }
            }
        )
        .then((response) => {
            this.setState({allPlaylist: response.data.result.list})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        const listOfPlaylists = this.state.allPlaylist.map((playlist) => {
            return (
            <ul key={playlist.id}>
                <li>
                    <span><Playlist size={60} color="#242424" weight="fill" /></span>
                    <p>{playlist.name}</p>
                </li>
            </ul>
            )
        })

        return (
            <ContainerHome>
                {listOfPlaylists}
            </ContainerHome>
        )
    }
}
