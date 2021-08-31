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
            <Link to='/coaching' className={navItem}>COACHING</Link>
            <Link to='/' className={navItem}>
                <Logo></Logo>
            </Link>
            <Link to='/about' className={navItem}>ABOUT</Link>
            <Link to='/team' className={navItem}>TEAM</Link>
        </div>
    )
}

export default Nav