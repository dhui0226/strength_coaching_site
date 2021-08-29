import * as React from 'react'
import Nav from '../components/nav'

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
      <Nav></Nav>
      <div>
        <h1>Powerlifting Online Coaching</h1>
      </div>
    </main>
  )
}

export default IndexPage
