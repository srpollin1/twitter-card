import './App.css'
import { useState } from 'react'

export function TwitterFollowcard({ userName, name}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo':'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    alt={name}
                    src={`https://unavatar.io/instagram/${userName}`} />
                <div className="tw-followCard-info">
                    <strong> {name} </strong>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}