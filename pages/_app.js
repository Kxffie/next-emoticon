import Navbar from "../components/Navbar"
import styles from '../styles/global.module.scss'

import { useEffect } from "react";

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
    </div>
  )
}

export default MyApp
