import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// styles
/*const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}*/

const test = {
  backgroundColor: "orange"
}

// markup
const IndexPage = () => {
  return (
    <main style={test}>
      <title>Home Page</title>
      <h1>Gatsby</h1>
      <StaticImage 
        alt='Infamous' 
        src='../images/InfamousCrew_Transparent.png'
      />
    </main>
  )
}

export default IndexPage
