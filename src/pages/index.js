import * as React from 'react'
import Logo from '../components/ifcLogo'

// styles
const pageStyles = {
  backgroundColor: 'black',
  color: 'white',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1>Gatsby</h1>
      <Logo></Logo>
    </main>
  )
}

export default IndexPage
