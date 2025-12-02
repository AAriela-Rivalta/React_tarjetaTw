import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Durán',
        isFollowin: true,
    },
    {
        userName: 'pheralb',
        name: 'Pablo H',
        isFollowing: false,
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowin: false,
    },
    { 
        userName: 'larolo10',
        name: 'Lara Lopez',
        isFollowin: true,
    },
    {
        userName: 'tefarogero',
        name: 'Estefania Rogero',
        isFollowin: false,
    },
    {
        userName: 'AAriela-Rivalta',
        name: 'Ariela Rivalta',
        isFollowin: false,
    },
]

export function App () {     
    return (
        <section className='App'>
            {
                users.map(user => {
                    const {userName, name, isFollowin} = user
                    return(
                        <TwitterFollowCard
                            key={userName} /*cuando renderizamos un array ponemos key con un 
                            nombre unico*/
                            userName={userName}
                            initialIsFollowing={isFollowin}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                }

                )
            }
        </section>
    )
}