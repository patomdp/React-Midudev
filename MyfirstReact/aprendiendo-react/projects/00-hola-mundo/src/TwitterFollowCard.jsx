import './TwitterFollowCard.css'

export function TwitterFollowCard({ children, userName = 'unknown', name, isFollowing }) {
    // const addAt = userName.includes('@') ? '' : '@';
    // const addAt = (userName) => `@${userName}`

    // Una opcion seria hacerlo como constante
    const imageSrc = `https://unavatar.io/${userName}`;
    console.log(isFollowing);

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imageSrc} alt="El avatar de Midudev" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside><button className='tw-followCard-button'>Seguir</button></aside>
        </article>
    )
}


