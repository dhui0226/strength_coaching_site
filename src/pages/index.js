import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import {
  mission,
  imageContainer,
  image,
  paragraphStyles,
  quoteStyles,
  btnContainer,
  btn,
  btnText
} from './index.module.css'

// markup
const IndexPage = () => {
  return (
      <Layout pageTitle='Home'>
        <div className={imageContainer}>      
          <StaticImage
            className={image}
            alt='deadlift'
            src='../images/deadlift.jpeg'
            height={600}
            width={2000}
          />
          <h1>Powerlifting Online Coaching</h1>
        </div>

        <div className={mission}>
          <p className={paragraphStyles}>Infamous Crew is about creating a community within a sport that we love.</p>
          <p className={paragraphStyles}>We believe that a strong individual is built up by the team around them.</p>
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
    </Layout>
  )
}

export default IndexPage
