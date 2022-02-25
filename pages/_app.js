import Navbar from "../components/Navbar"
import styles from '../styles/global.module.scss'

function MyApp({ Component, pageProps }) {
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
