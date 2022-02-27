import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import styles from '../styles/global.module.scss'


function MyApp({ Component, pageProps }) {

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
