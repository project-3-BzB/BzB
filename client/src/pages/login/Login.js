import React from 'react'

import './style.css'
import LoginForm from '../../components/LoginForm'
import LoginNav from '../../components/LoginNav'
import Logo from '../../components/Logo'


//LOGIN PAGE MOCKUP

const Login = () => {

    return (
        <div className='WrapperYellow'>
            <section className='hero is-fullheight'>
           <div className='hero-body has-text-centered'>
                <div className='login animate__animated animate__backInDown'>
                    <h4 className='title is-4'>Log In</h4>
                    <Logo />
                    <LoginForm />
                    <LoginNav />
                </div>
           </div>
       </section>
        </div>
       
    )
}

export default Login