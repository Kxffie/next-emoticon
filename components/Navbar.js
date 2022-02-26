import React from 'react'
import styles from '../styles/navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.center}>
            <div className={styles.title}>
                Kxffiehub.xyz
            </div>
            <div className={styles.right}>
                <a href="https://github.com/kxffie" target="_blank" rel="noreferrer">github</a>
            </div>
            <div className={styles.right}>
                <a href="https://discord.gg/XhZEfYbMwE" target="_blank" rel="noreferrer">discord</a>
            </div>
        </div>
    )
}

export default Navbar