import * as React from 'react'
import Logo from './ifcLogo'
import { Link } from 'gatsby'
import {
    navContainer,
    navItem
} from './nav.module.css'

const Nav = () => {
    return (
        <div className={navContainer}>
            <Link to='/' className={navItem}>Home</Link>
            <Link to='/coaching' className={navItem}>Coaching</Link>
            <Link to='/services' className={navItem}>Services</Link>
            <Logo></Logo>
            <Link to='/about' className={navItem}>About</Link>
            <Link to='/team' className={navItem}>Team</Link>
            <Link to='/contact' className={navItem}>Contact</Link>
        </div>
    )
}

export default Nav