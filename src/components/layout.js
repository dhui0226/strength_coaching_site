import * as React from 'react'
import Nav from './nav'
import Footer from './footer'
import { pageStyles } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={pageStyles}>
            <title>{pageTitle}</title>
            <main>
                <Nav></Nav>
                {children}
                <Footer></Footer>
            </main>
        </div>
    )
}

export default Layout