import * as React from 'react' 
import { StaticImage } from 'gatsby-plugin-image'

const Logo = () => {
    return (
        <StaticImage 
            alt='Infamous' 
            src='../images/InfamousCrew_Transparent.png'
            width={100}
        />
    )
}

export default Logo