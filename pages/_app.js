import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import styles from '../styles/globals.module.scss'

import { useEffect } from "react";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div className={styles.center}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp