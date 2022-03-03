import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/Navbar.module.scss'

import { BsCashCoin } from "react-icons/bs";

export const Navbar = () => {
    return (
        <main className={styles.main}>
            <div className={styles.header} onClick={() =>  navigator.clipboard.writeText("https://www.kxffiehub.xyz/")} style={{cursor: "pointer"}}>
                <div className={styles.image}>
                    <Image src="/favicon-light.png" width="700px" height="700px" />
                </div>
                <div className={styles.title}>
                    <h1><span>Kxffiehub</span></h1>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.links}>
                    
                    <Link href="/">
                        <a className={styles.link}>
                            <h2>Home</h2>
                        </a>
                    </Link>
                    <Link href="/emoticons">
                        <a className={styles.link}>
                            <h2>Emoticons</h2>
                        </a>
                    </Link>
                    <Link href="https://linktr.ee/Kxffie">
                        <a target="_blank" className={styles.link}>
                            <h2>Socialtr.ee</h2>
                        </a>
                    </Link>
                </div>
            </div>

            <div className={styles.footer}>
                <Link href="https://support.savethechildren.org/site/Donation2?df_id=5751&mfc_pref=T&5751.donation=form1">
                    <button className={styles.adButton}>
                        DONATE TO UKRAINE
                    </button>
                </Link>
            </div>
        </main>
    )
}
