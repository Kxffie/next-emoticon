import React from 'react'
import styles from '../styles/navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.center}>
            <div className={styles.title}>
                Kxffiehub.xyz
            </div>
            <div className={styles.right}>
                <a href="https://github.com/kxffie" target="_blank">github</a>
            </div>
            <div className={styles.right}>
                <a href="https://discord.gg/Qe53hnT3Dm" target="_blank">discord</a>
            </div>
        </div>
    )
}

export default Navbar