import * as React from 'react'
import Layout from '../components/layout'
import {
    pageContainer,
    heading,
    formContainer,
    nameContainer,
    form,
    firstNameInput,
    lastNameLabel,
    lastNameInput,
    genderSelect,
    smallerInput,
    biggerInput,
    description,
    btnContainer,
    btn
} from './application.module.css'

const ApplicationPage = () => {
    const genderList = ['Male', 'Female', 'Other']

    return (
        <Layout pageTitle='Application'>
            <div className={heading}>
                <h1>APPLICATION</h1>
            </div>  

            <div className={pageContainer}>
                <form className={formContainer} name='application' method='post' data-netlify='true' data-netlify-honeypot='bot-field' onSubmit='submit'>
                    <input type='hidden' name='form-name' value='application' />
                    <p>Please fill out the section below, as honestly and completely as you can to give us more information on how we can work together.</p>
                    <div className={nameContainer}>
                        <label className={form}>
                            <span>First Name</span>
                            <input
                            className={firstNameInput}
                            name='firstName'
                            type='text'
                            ></input>
                        </label>
                        <label className={form}>
                            <span className={lastNameLabel}>Last Name</span>
                            <input 
                            className={lastNameInput}
                            name='lastName'
                            type='text'
                            ></input>       
                        </label>
                    </div>
                    <label className={form}>
                        <span>Email Address</span>
                        <input 
                        name='email'
                        type='email'
                        ></input>
                    </label>
                    <label className={form}>
                        <span>Date of Birth</span>
                        <input 
                        name='dob'
                        type='date'
                        ></input>
                    </label>                            
                    <label className={form}>
                        <span>Gender</span>
                        <select 
                        className={genderSelect} 
                        name='gender'>
                            {genderList.map((selectedGender) => 
                                <option key={selectedGender}>{selectedGender}</option>
                            )}
                        </select>
                    </label>
                    <label className={form}>
                        <span>Height</span>
                        <input 
                        className={smallerInput}
                        name='height'
                        type='text'
                        ></input>
                    </label>
                    <label className={form}>
                        <span>Weight</span>
                        <input 
                        className={smallerInput}
                        name='weight'
                        type='number'
                        ></input>
                    </label>
                    <label className={form}>
                        <span>Years Training / Athletic Background</span>
                        <textarea 
                        className={biggerInput}
                        name='trainingBackground'
                        type='text'
                        rows='4'
                        cols='50'
                        ></textarea>
                    </label>
                    <label className={form}>
                        <span>Weekly Frequency</span>
                        <span className={description}>How often are you performing the Squat,Bench Press, and deadlift and its variations during a training week?</span>
                        <textarea 
                        className={biggerInput}
                        name='weeklyFrequency'
                        type='text'
                        rows='4'
                        cols='50'
                        ></textarea>
                    </label>
                    <label className={form}>
                        <span>Are you prepping for a meet?
                        If so, please leave details below</span>
                        <textarea 
                        className={biggerInput}
                        name='meetPrep'
                        type='text'
                        rows='4'
                        cols='50'
                        ></textarea>
                    </label>
                    <label className={form}>
                        <span>Current 1 Rep Max in S/B/D</span>
                        <textarea 
                        className={biggerInput}
                        name='sbdMaxes'
                        type='text'
                        rows='4'
                        cols='50'
                        ></textarea>
                    </label>
                    <div className={btnContainer}>
                        <button
                        className={btn}
                        type='submit'>
                            <p>Submit</p>
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default ApplicationPage