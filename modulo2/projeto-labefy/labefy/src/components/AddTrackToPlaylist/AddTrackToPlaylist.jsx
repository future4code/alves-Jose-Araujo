import React, { Component } from 'react'
import axios from "axios"

import { ContainerAddTrack } from './styles'
import { Play } from "phosphor-react"


export default class AddTrackToPlaylist extends Component {
    state = {
        tracks: [],
        newTrackName: "",
        newTrackArtist: "",
        NewTrackLink: "",
    }

    onChangeInputMusic = (e) => {
        this.setState({ newTrackName: e.target.value })
    }

    onChangeInputArtist = (e) => {
        this.setState({ newTrackArtist: e.target.value })
    }

    onChangeInputLink = (e) => {
        this.setState({ NewTrackLink: e.target.value })
    }

    getPlaylistTracks = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        {
            headers: {
                Authorization: "jose-carlos-alves"
            }
        })
        .then ((response)=>{
            this.setState({tracks : response.data.result.tracks})
        } )
        .catch ((err)=> {
            console.log(err.response)
        })
    }

    render() {
        return (
            <ContainerAddTrack>
                <div className="BoxCreateTrack">
                    <span>
                        <Play size={60} color="#242424" weight="fill"/>
                    </span>

                    <input 
                        type={"text"}
                        onChange={this.onChangeInputMusic}
                        placeholder="Digite o nome da música"
                    />

                    <input 
                        type={"text"}
                        onChange={this.onChangeInputArtist}
                        placeholder="Digite o nome do artista"
                    />


                    <input 
                        type={"text"}
                        onChange={this.onChangeInputLink}
                        placeholder="Digite o link da música"
                    />

                    <button>Confirmar</button>
                </div>
            </ContainerAddTrack>
        )
    }
}
