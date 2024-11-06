// import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    return (
        <div className='App'>
            <TwitterFollowCard
                isFollowing={true}
                userName="midudev"
                name={'Miguel Angel'}
            />
            <TwitterFollowCard isFollowing={false} userName="kikobeats" name={'Kiko Beats'} />
            <TwitterFollowCard isFollowing={true} userName="mardelpato" name={'Pato Mariano'} />
            <TwitterFollowCard isFollowing userName="elonmusk" name={'Elon Musk'} />
        </div>
    )
}

