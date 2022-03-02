import React from 'react'
import { Navbar } from './Navbar'

export const Layout = ({children}) => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
