import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import {
    coachingContainer,
    medalPic,
    teamPic,
    coachingItem,
    btnContainer,
    btn,
    btnText
} from './services.module.css'

const ServicesPage = () => {
    return (
        <Layout pageTitle='Services'>
            <h1>Services</h1>
            <div className={coachingContainer}>
                <StaticImage 
                    className={medalPic}
                    alt='medals'
                    src='../images/medals.jpg'
                />
                <div className={coachingItem}>
                    <p>Online coaching includes individualized programming with full-time communication and daily check-ins.</p>
                    <p>Alongside frequent check-ins, additional guidance on movement drills, mobility, warm-ups, and exercise technique will be provided. We will also assist in dietary decisions, and other lifestyle related factors should you need it.</p>
                    <div className={btnContainer}>
                        <Link to='/application'>
                            <button className={btn}>
                                <p className={btnText}>Apply Now</p>
                            </button>
                        </Link>
                    </div>
                </div>
                <StaticImage 
                    className={teamPic}
                    alt='group'
                    src='../images/team.jpg'
                />
            </div>
        </Layout>
    )
}

export default ServicesPage