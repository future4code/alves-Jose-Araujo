import React, { Component } from 'react'
import axios from "axios"

export default class getAllPlaylists extends Component {
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

  deletePlaylist = (id) => {
    axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
      {
        headers:{
          Authorization: "jose-carlos-alves"
        }
      }
    )
    .then((response) => {
      alert("Playlist deletada com sucesso!")
      this.getPlaylists();
    })
    .catch((error) => {
      console.log(error)
      alert("Ocorreu um erro, tente novamente!")
    })
  }

  render() {
    const listOfPlaylists = this.state.allPlaylist.map((playlist) => {
      return (
        <ul key={playlist.id}>
          <li>
            {playlist.name}
            <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
          </li>
        </ul>
      )
    })

    return (
      <div>
        {listOfPlaylists}
      </div>
    )
  }
}
