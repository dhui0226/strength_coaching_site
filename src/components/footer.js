import * as React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { footerContainer } from './footer.module.css'

const Footer = () => {
    return (
        <div className={footerContainer}>
            <a href='https://instagram.com/alikize?utm_medium=copy_link' target='_blank' rel="noreferrer" alt='aliki'>
                <FaInstagram />
            </a>
            <a href='https://instagram.com/infamouscrew.co?utm_medium=copy_link' target='_blank' rel="noreferrer" alt='instagram'>
                <FaInstagram />
            </a>
        </div>
    )
}

export default Footer