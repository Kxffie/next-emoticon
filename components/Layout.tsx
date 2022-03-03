import React from 'react'
import { Navbar } from './Navbar'
import styles from '../styles/Layout.module.scss'

export const Layout = ({children}) => {
    return (
        <div className={styles.main}>
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <div className={styles.children}>
                {children}
            </div>
        </div>
    )
}
