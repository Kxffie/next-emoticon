import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { faces } from '../public/data';

export default function Emoticon() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Kxffiehub.xyz | Emoticons</title>
                <meta name="Kxffiehub.xyz" content="Kxffiehub.xyz | Your Go-To Copy and Paste Emoticon Site!" />
                <link rel="icon" type="image/x-icon" href="./favicon-light.png"></link>
            </Head>

            <main className={styles.main}>
                <h1>Emoticons</h1>
                <div className={styles.divider} />

                <div className={styles.column}>
                    {faces.map((faces) => (
                        <div key="faces" className={styles.row} onClick={() =>  navigator.clipboard.writeText(faces.face)}>
                        <div className={styles.card}>{faces.face}</div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
