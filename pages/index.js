import Head from 'next/head'
import styles from '../styles/index.module.scss'
import Script from 'next/script';

import SuggestionForm from '../components/SuggestionForm';
import { faces } from '../public/data';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kxffiehub.xyz | Home</title>
        
        <meta name="theme-color" content="#ED6A5A"></meta>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="author" content="Kxffie" />
        <meta name="description" content="Kxffiehub.xyz | Copy and Paste Emoticons!" />
        <meta name="keywords" content="HTML, CSS, JavaScript, NextJS, Next, ReactJS, React, Kxffie, Koffie, Youtube, Emoticon, Copy and Paste, Emoticon Website, Funny Emojis, Emoji, Emojis, Lenny, Kxffiehub, Xyz, Html, css, javascript, nextjs, next, reactjs, react, kxffie, koffie, youtube, emoticon, copy and paste, emoticon website, funny emojis, emoji, emojis, lenny, kxffiehub, xyz, html, css, javascript, nextjs, next, reactjs, react, kxffie, koffie, youtube, emoticon, copy and paste, emoticon website, funny emojis, emoji, emojis, lenny, kxffiehub, xyz, HTML, CSS, JAVASCRIPT, NEXTJS, NEXT, REACTJS, REACT, KXFFIE, KOFFIE, YOUTUBE, EMOTICON, COPY AND PASTE, EMOTICON WEBSITE, FUNNY EMOJIS, EMOJI, EMOJIS, LENNY, KXFFIEHUB, XYZ, emoticons, japanese emoticons, cute emoticons, kawaii emoticons, text emoticons, emoticons meaning, smiley emoticons, emoticons text, emoticons list, keyboard emoticons, facebook emoticons, fun emoticons, halloween emoticons, fun emoticons, happy emoticons, funny emoticons, cool emoticons, animated emoticons, emoticons heart, ascii emoticons, how to add emoticons to discord, how to get more steam emoticons, what are emoticons, what does the emoticons mean, how to make emoticons, how to use emoticons on facebook, what does mean emoticons, how to make an emoticons, how to type emoticons, how to turn off skype emoticons, how to add emoticons to text messages on android, how to do facebook emoticons, how to add emoticons on facebook, how to add emoticons to skype, how to use the new emoticons on facebook, how to get emoticons on iphone 5, how to make emoticons for twitch, arc, arc.io, arc io, arc io invite code, arc io alternative, arc io code, arc.io python liberary, arc.io invite, how does arc.io work" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

        <script data-ad-client="ca-pub-9677093057091061" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script async src="https://arc.io/widget.min.js#DnCcJ8yZ"></script>
      </Head>

      <main className={styles.main}>
        <Script src="https://unpkg.com/akar-icons-fonts" rel="noreferrer"></Script>

        <div className={styles.divider} />
        <h3 className={styles.reason}>Hello, this website was made because I hate always looking online for specific faces. So I just made this because I know im not the only one. This contains every text-face that I know of, especially Lenny.</h3>
        <div className={styles.divider} />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9677093057091061" crossorigin="anonymous"></script>
        {/* ads */}
        <ins class="adsbygoogle"
            style={{display: "block"}}
            data-ad-client="ca-pub-9677093057091061"
            data-ad-slot="6136901466"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>

        <h2>Click to Copy</h2>
        <h4>Some will not look right, all based on what browser you use and what application you send the emoticons on: discord, reddit, instagram etc.</h4>
        <div className={styles.row}>
          {faces.map((faces) => (
            <div key="faces" className={styles.column} onClick={() =>  navigator.clipboard.writeText(faces.face)}>
              <div className={styles.card}>{faces.face}</div>
            </div>
          ))}
        </div>

        <center><h1>MORE COMING SOON...</h1></center>
        <div className={styles.divider} />
        <SuggestionForm />
        <div className={styles.divider} />
      </main>
    </div>
  )
}
