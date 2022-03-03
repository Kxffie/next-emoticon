import React from 'react'
import styles from '../styles/Navbar.module.scss'

export const Navbar = () => {
    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h1 onClick={() =>  navigator.clipboard.writeText("https://www.kxffiehub.xyz/")}>Kxffiehub</h1>
            </div>

            <div className={styles.content}>
                <div className={styles.links}>
                    <a href="/" className={styles.link}>
                        <h3>Home</h3>
                    </a>
                    <a href="/emoticon" className={styles.link}>
                        <h3>Emoticon</h3>
                    </a>
                    <a href="/emojimix" className={styles.link}>
                        <h3>Emoji-Mix</h3>
                    </a>
                </div>
            </div>

            <div className={styles.footer}>
                <h1>Footer</h1>
            </div>
        </main>
    )
}
