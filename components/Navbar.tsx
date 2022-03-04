import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

import { BsCashCoin } from "react-icons/bs";

export const Navbar = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div
          className={styles.image}
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigator.clipboard.writeText("https://www.kxffiehub.xyz/")
          }
        >
          <Image
            src="/favicon-light.png"
            width="700px"
            height="400px"
            alt="kxffiehub"
          />
        </div>
        <div
          className={styles.title}
          onClick={() =>
            navigator.clipboard.writeText("https://www.kxffiehub.xyz/")
          }
        >
          <h1>
            <span>Kxffiehub</span>
          </h1>
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
    </main>
  );
};
