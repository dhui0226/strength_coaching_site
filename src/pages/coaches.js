import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { 
    teamContainer,
    teamItem,
    coachImage,
    coachInfo
} from './coaches.module.css'

const CoachesPage = () => {
    return (
        <Layout pageTitle='Coaches'>
            <div className={teamContainer}>
                <div className={teamItem}>
                    <div className={coachImage}>
                        <h1>Coaches</h1>
                        <StaticImage 
                            alt='coach'
                            src='../images/coach.jpg'
                            width={500}
                            height={450}
                        />
                    </div>
                    <div className={coachInfo}>
                        <h2>Aliki</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CoachesPage