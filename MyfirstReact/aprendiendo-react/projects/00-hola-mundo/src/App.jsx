// import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    return (
        <div className='App'>
            <TwitterFollowCard
                isFollowing
                userName="midudev"
            >
                Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing={false} userName="kikobeats"
            >
                Kiko Beats
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={true} userName="mardelpato"
            >
                Mar del Pato
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="elonmusk">
                Elon Musk
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing >
                Desconocido
            </TwitterFollowCard>

        </div>
    )
}

