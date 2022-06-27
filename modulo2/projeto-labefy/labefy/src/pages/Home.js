import React, { Component } from 'react'
import { ContainerHome } from "./style"
import { Playlist } from "phosphor-react"

export default class home extends Component {
    render() {
        return (
            <ContainerHome>
                <div className='PlaylistBox'>
                    <span>
                        <Playlist size={60} color="#242424" weight="fill" />
                    </span>

                    <h4>DiCaprio 2</h4>
                    <p>By Carlos Araújo</p>
                </div>

                <div className='PlaylistBox'>
                    <span>
                        <Playlist size={60} color="#242424" weight="fill" />
                    </span>

                    <h4>DiCaprio 2</h4>
                    <p>By Carlos Araújo</p>
                </div>

                <div className='PlaylistBox'>
                    <span>
                        <Playlist size={60} color="#242424" weight="fill" />
                    </span>

                    <h4>DiCaprio 2</h4>
                    <p>By Carlos Araújo</p>
                </div>

                <div className='PlaylistBox'>
                    <span>
                        <Playlist size={60} color="#242424" weight="fill" />
                    </span>

                    <h4>DiCaprio 2</h4>
                    <p>By Carlos Araújo</p>
                </div>

                <div className='PlaylistBox'>
                    <span>
                        <Playlist size={60} color="#242424" weight="fill" />
                    </span>

                    <h4>DiCaprio 2</h4>
                    <p>By Carlos Araújo</p>
                </div>

                <div className='PlaylistBox'>
                    <span>
                        <Playlist size={60} color="#242424" weight="fill" />
                    </span>

                    <h4>DiCaprio 2</h4>
                    <p>By Carlos Araújo</p>
                </div>
            </ContainerHome>
        )
    }
}
