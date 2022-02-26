import React from 'react'
import styles from '../styles/navbar.module.scss'
import { GithubFill, DiscordFill, YoutubeFill, LinkChain } from 'akar-icons'

const Navbar = () => {
    return (
        <div className={styles.center}>
            <div className={styles.title}>
                Kxffiehub.xyz <a className={styles.copybtn} onClick={() =>  navigator.clipboard.writeText("https://emoticon.kxffiehub.xyz")} target="_blank" rel="noreferrer"><LinkChain strokeWidth={2} size={24} /></a>
            </div>

            <div className={styles.right}>
                <a href="https://github.com/kxffie" target="_blank" rel="noreferrer"><GithubFill strokeWidth={2} size={24} /></a>
            </div>
            <div className={styles.right}>
                <a href="https://discord.gg/XhZEfYbMwE" target="_blank" rel="noreferrer"><DiscordFill strokeWidth={2} size={24} /></a>
            </div>
            <div className={styles.right}>
                <a href="https://www.youtube.com/c/Kxffie" target="_blank" rel="noreferrer"><YoutubeFill strokeWidth={2} size={24} /></a>
            </div>
        </div>
    )
}

export default Navbar