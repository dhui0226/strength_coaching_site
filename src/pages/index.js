import * as React from 'react'
import { Link } from 'gatsby'
import Nav from '../components/nav'

// styles
const pageStyles = {
  backgroundColor: 'black',
  color: 'white',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const mission = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const headingStyles = {
  padding: '4rem'
}

const paragraphStyles = {
  margin: 0,
  padding: '.5rem'
}

const quoteStyles = {
  padding: '.5rem'
}

const btnContainer = {
  display: 'flex',
  justifyContent: 'center',
  padding: '4rem',
}

const btn = {
  fontSize: '1.25rem',
  backgroundColor: 'black',
  border: 'solid white',
  color: 'white',
  cursor: 'pointer',
  
}

const btnText = {
  padding: '.5rem'
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <Nav></Nav>
      <div style={mission}>
        <h1 style={headingStyles}>Powerlifting Online Coaching</h1>
        <p style={paragraphStyles}>Infamous Crew is about creating a sense of community within a sport that has done so much for us.</p>
        <p style={paragraphStyles}>We believe that having a team to push you to your limits will make you stronger.</p>
        <p style={paragraphStyles}>That's why our priority has always been to build up a family of highly driven individuals that can rely on each other.</p>
        <h2 style={quoteStyles}>"Strength in Unity"</h2>
      </div>
      <div style={btnContainer}>
        <Link to='/application'>
          <button style={btn}>
            <p style={btnText}>Apply Now</p>
          </button>
        </Link>
      </div>
    </main>
  )
}

export default IndexPage
