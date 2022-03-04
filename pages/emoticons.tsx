import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import styles from "../styles/Home.module.scss";

import { faces } from "../public/data";

export default function Emoticons() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kxffiehub.xyz | Emoticons</title>

        <meta name="theme-color" content="#ED6A5A"></meta>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Kxffie" />
        <meta
          name="description"
          content="Kxffiehub.xyz | Copy and Paste Emoticons!"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, NextJS, Next, ReactJS, React, Kxffie, Koffie, Youtube, Emoticon, Copy and Paste, Emoticon Website, Funny Emojis, Emoji, Emojis, Lenny, Kxffiehub, Xyz, Html, css, javascript, nextjs, next, reactjs, react, kxffie, koffie, youtube, emoticon, copy and paste, emoticon website, funny emojis, emoji, emojis, lenny, kxffiehub, xyz, html, css, javascript, nextjs, next, reactjs, react, kxffie, koffie, youtube, emoticon, copy and paste, emoticon website, funny emojis, emoji, emojis, lenny, kxffiehub, xyz, HTML, CSS, JAVASCRIPT, NEXTJS, NEXT, REACTJS, REACT, KXFFIE, KOFFIE, YOUTUBE, EMOTICON, COPY AND PASTE, EMOTICON WEBSITE, FUNNY EMOJIS, EMOJI, EMOJIS, LENNY, KXFFIEHUB, XYZ, emoticons, japanese emoticons, cute emoticons, kawaii emoticons, text emoticons, emoticons meaning, smiley emoticons, emoticons text, emoticons list, keyboard emoticons, facebook emoticons, fun emoticons, halloween emoticons, fun emoticons, happy emoticons, funny emoticons, cool emoticons, animated emoticons, emoticons heart, ascii emoticons, how to add emoticons to discord, how to get more steam emoticons, what are emoticons, what does the emoticons mean, how to make emoticons, how to use emoticons on facebook, what does mean emoticons, how to make an emoticons, how to type emoticons, how to turn off skype emoticons, how to add emoticons to text messages on android, how to do facebook emoticons, how to add emoticons on facebook, how to add emoticons to skype, how to use the new emoticons on facebook, how to get emoticons on iphone 5, how to make emoticons for twitch, arc, arc.io, arc io, arc io invite code, arc io alternative, arc io code, arc.io python liberary, arc.io invite, how does arc.io work"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <script async src="https://arc.io/widget.min.js#DnCcJ8yZ"></script>
      </Head>

      <main className={styles.main}>
        <div className={styles.ad}>
          <div className={styles.adTitle}>HOLD UP!</div>

          <div className={styles.adContent}>
            7.5 million children in Ukraine are in grave danger of physical
            harm, severe emotional distress and displacement following an
            escalation in hostilities. Every effort should be made to find a
            diplomatic solution and avert a catastrophic war.
            <br />
            <br />
            Your donation today can help provide children and families with
            immediate aid, such as food, water, hygiene kits, psychosocial
            support and cash assistance. Together, we can protect children in
            crisis.
            <br />
            <br />
            <Link
              href="https://support.savethechildren.org/site/Donation2?df_id=5751&mfc_pref=T&5751.donation=form1"
              passHref
            >
              <button className={styles.adButton}>DONATE</button>
            </Link>
          </div>
        </div>

        <h1>Emoticons</h1>
        <div className={styles.divider} />

        <div className={styles.column}>
          {faces.map((faces) => (
            <div
              key="faces"
              className={styles.row}
              onClick={() => navigator.clipboard.writeText(faces.face)}
            >
              <div className={styles.card}>{faces.face}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
