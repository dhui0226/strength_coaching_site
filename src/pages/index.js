import * as React from 'react'
import { Link } from 'gatsby'
import Nav from '../components/nav'
import {
  pageStyles,
  mission,
  headingStyles,
  paragraphStyles,
  quoteStyles,
  btnContainer,
  btn,
  btnText
} from './index.module.css'

// markup
const IndexPage = () => {
  return (
    <main className={pageStyles}>
      <title>Home Page</title>
      <Nav></Nav>
      <div className={mission}>
        <h1 className={headingStyles}>Powerlifting Online Coaching</h1>
        <p className={paragraphStyles}>Infamous Crew is about creating a sense of community within a sport that has done so much for us.</p>
        <p className={paragraphStyles}>We believe that having a team to push you to your limits will make you stronger.</p>
        <p className={paragraphStyles}>That's why our priority has always been to build up a family of highly driven individuals that can rely on each other.</p>
        <h2 className={quoteStyles}>"Strength in Unity"</h2>
      </div>
      <div className={btnContainer}>
        <Link to='/application'>
          <button className={btn}>
            <p className={btnText}>Apply Now</p>
          </button>
        </Link>
      </div>
    </main>
  )
}

export default IndexPage
