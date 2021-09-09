import * as React from 'react'
import { useState } from 'react'
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
    /*const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDOB] = useState(0)
    const [gender, setGender] = useState('Male')
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [detailsOne, setDetailsOne] = useState('')
    const [detailsTwo, setDetailsTwo] = useState('')
    const [detailsThree, setDetailsThree] = useState('')
    const [sbdMaxes, setSbdMaxes] = useState('')*/

    const genderList = ['Male', 'Female', 'Other']

    /*function handleSubmit() {
        console.log('info stuff', firstName, lastName, email, dob, gender, height, weight, detailsOne, detailsTwo, detailsThree, sbdMaxes)
    }*/

    return (
        <Layout pageTitle='Application Page'>
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
                            /*value={firstName}
                            onChange={(event) => {setFirstName(event.target.value)}}*/></input>
                        </label>
                        <label className={form}>
                            <span className={lastNameLabel}>Last Name</span>
                            <input 
                            className={lastNameInput}
                            name='lastName'
                            type='text'
                            /*value={lastName}
                            onChange={(event) => {setLastName(event.target.value)}}*/></input>       
                        </label>
                    </div>
                    <label className={form}>
                        <span>Email Address</span>
                        <input 
                        name='email'
                        type='email'
                        /*value={email}
                        onChange={(event) => {setEmail(event.target.value)}}*/></input>
                    </label>
                    <label className={form}>
                        <span>Date of Birth</span>
                        <input 
                        name='dob'
                        type='date'
                        /*value={dob}
                        onChange={(event) => {setDOB(event.target.value)}}*/></input>
                    </label>                            
                    <label className={form}>
                        <span>Gender</span>
                        <select 
                        className={genderSelect} 
                        name='gender'
                        /*onChange={(event) => {setGender(event.target.value)}}*/>
                            {genderList.map((selectedGender) => 
                                <option /*value={selectedGender}*/ key={selectedGender}>{selectedGender}</option>
                            )}
                        </select>
                    </label>
                    <label className={form}>
                        <span>Height</span>
                        <input 
                        className={smallerInput}
                        name='height'
                        type='number'
                        /*value={height}
                        onChange={(event) => {setHeight(event.target.value)}}*/></input>
                    </label>
                    <label className={form}>
                        <span>Weight</span>
                        <input 
                        className={smallerInput}
                        name='weight'
                        type='number'
                        /*value={weight}
                        onChange={(event) => {setWeight(event.target.value)}}*/></input>
                    </label>
                    <label className={form}>
                        <span>Years Training / Athletic Background</span>
                        <input 
                        className={biggerInput}
                        name='trainingBackground'
                        type='text'
                        /*value={detailsOne}
                        onChange={(event) => {setDetailsOne(event.target.value)}}*/></input>
                    </label>
                    <label className={form}>
                        <span>Weekly Frequency</span>
                        <span className={description}>How often are you performing the Squat,Bench Press, and deadlift and its variations during a training week?</span>
                        <input 
                        className={biggerInput}
                        name='weeklyFrequency'
                        type='text'
                        /*value={detailsTwo}
                        onChange={(event) => {setDetailsTwo(event.target.value)}}*/></input>
                    </label>
                    <label className={form}>
                        <span>Are you prepping for a meet?
                        If so, please leave details below</span>
                        <input 
                        className={biggerInput}
                        name='meetPrep'
                        type='text'
                        /*value={detailsThree}
                        onChange={(event) => {setDetailsThree(event.target.value)}}*/></input>
                    </label>
                    <label className={form}>
                        <span>Current 1 Rep Max in S/B/D</span>
                        <input 
                        className={biggerInput}
                        name='sbdMaxes'
                        type='text'
                        /*value={sbdMaxes}
                        onChange={(event) => {setSbdMaxes(event.target.value)}}*/></input>
                    </label>
                    <div className={btnContainer}>
                        <button
                        className={btn}
                        type='submit'
                        /*onClick={() => {
                            handleSubmit()
                        }}*/>
                            <p>Submit</p>
                        </button>
                    </div>
                </form>
            </div>

            {/*<div className={btnContainer}>
                <button
                className={btn}
                type='submit'
                onClick={() => {
                    handleSubmit()
                }}>
                    <p>Submit</p>
                </button>
            </div>*/}
        </Layout>
    )
}

export default ApplicationPage