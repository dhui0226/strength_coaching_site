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
            <Link to='/' className={navItem}>HOME</Link>
            <Link to='/services' className={navItem}>SERVICES</Link>
            <Link to='/' className={navItem}>
                <Logo></Logo>
            </Link>
            <Link to='/about' className={navItem}>ABOUT</Link>
            <Link to='/coaches' className={navItem}>COACHES</Link>
        </div>
    )
}

export default Nav