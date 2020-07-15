import React from 'react'

import './style.css'
import LoginForm from '../../components/LoginForm'
import LoginNav from '../../components/LoginNav'
import logo from '../../logo.png'


//LOGIN PAGE MOCKUP

const Login = () => {
    return (
       <section>
           <div className='hero-body has-text-centered'>
                <div className='login'>
                    <img className='logo' src={logo} width='100px' alt='BzB logo' />
                    <LoginForm />
                    <LoginNav />
                </div>
           </div>
       </section>
    )
}

export default Login