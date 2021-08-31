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
    lastNameInput,
    birthDateForm,
    btnContainer,
    btn
} from './application.module.css'

const ApplicationPage = () => {
    const [firstName, setFirstName] = useState('')

    function handleSubmit() {
        console.log('first name', firstName)
    }

    return (
        <Layout pageTitle='Application Page'>
            <div className={heading}>
                <h1>APPLICATION</h1>
                <p>Please fill out the section below, as honestly and completely as you can to give us more information on how we can work together.</p>
            </div>  

            <div className={pageContainer}>
                <div className={formContainer}>
                    <div className={nameContainer}>
                        {/*<h3>Name *</h3>*/}
                        <label className={form}>
                            <span>First Name</span>
                            <input
                            className={firstNameInput}
                            type='text'
                            value={firstName}
                            onChange={(event) => {setFirstName(event.target.value)}}></input>
                        </label>
                        <label className={form}>
                            <span>Last Name</span>
                            <input 
                            className={lastNameInput}></input>       
                        </label>
                    </div>
                    <label className={form}>
                        <span>Email Address</span>
                        <input></input>
                    </label>
                    <div className={birthDateForm}>
                        <label className={form}>
                            <span>MM</span>
                            <input></input>
                        </label>               
                        <label className={form}>
                            <span>DD</span>
                            <input></input>
                        </label>
                        <label className={form}>
                            <span>YYYY</span>
                            <input></input>
                        </label>
                    </div>
                    <label className={form}>
                        <span>Gender</span>
                        <input></input>
                    </label>
                    <label className={form}>
                        <span>Height</span>
                        <input></input>
                    </label>
                    <label className={form}>
                        <span>Weight</span>
                        <input></input>
                    </label>
                    <label className={form}>
                        <span>Years Training / Athletic Background</span>
                        <input></input>
                    </label>
                    <label className={form}>
                        <span>Weekly Frequency
                        How often are you performing the Squat,Bench Press, and deadlift and its variations during a training week?</span>
                        <input></input>
                    </label>
                    <label className={form}>
                        <span>Are you prepping for a meet?
                        If so, please leave details below</span>
                        <input></input>
                    </label>
                    <label className={form}>
                        <span>Current 1 Rep Max in S/B/D</span>
                        <input></input>
                    </label>
                </div>
            </div>

            <div className={btnContainer}>
                <button
                className={btn}
                onClick={() => {
                    handleSubmit()
                }}>
                    <p>Submit</p>
                </button>
            </div>
        </Layout>
    )
}

export default ApplicationPage