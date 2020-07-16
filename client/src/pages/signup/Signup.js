import React from 'react'

// import './style.css'
import SignupForm from '../../components/signup/SignupForm'
import SignupNav from '../../components/signup/SignupNav'
import Logo from '../../components/Logo'


const Login = () => {

    return (
        <div className='WrapperYellow'>
            <section className='hero is-fullheight'>
           <div className='hero-body has-text-centered'>
                <div className='login animate__animated animate__lightSpeedInRight'>
                    <h4 className='title is-4'>Sign Up</h4>
                    <Logo />
                    <SignupForm />
                    <SignupNav />
                </div>
           </div>
       </section>
        </div>
       
    )
}

export default Login