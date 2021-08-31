import * as React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { footerContainer } from './footer.module.css'

const Footer = () => {
    return (
        <div className={footerContainer}>
            <a href='https://www.instagram.com/' alt='instagram'>
                <FaInstagram />
            </a>
            <a href='https://www.instagram.com/' alt='instagram'>
                <FaInstagram />
            </a>
        </div>
    )
}

export default Footer