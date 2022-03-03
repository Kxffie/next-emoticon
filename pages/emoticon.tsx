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

                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9677093057091061" crossOrigin="anonymous"></script>
                <script async src="https://arc.io/widget.min.js#DnCcJ8yZ"></script>
            </Head>

            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9677093057091061" crossOrigin="anonymous"></script>
            {/* ads */}
            <ins className="adsbygoogle"
                style={{display: "block"}}
                data-ad-client="ca-pub-9677093057091061"
                data-ad-slot="6136901466"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>

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
