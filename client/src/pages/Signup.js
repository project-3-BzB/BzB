import React from 'react'

import SignupForm from '../components/signup/SignupForm'
import SignupNav from '../components/signup/SignupNav'
import Logo from '../components/Logo'
import { Div, HeroBody, Wrapper } from '../style/Signup'
import img from '../img/bg_yellow.png'


const Signup = () => {
    return (
        <Wrapper img={img}>
            <section className='hero is-fullheight'>
                <HeroBody className='hero-body has-text-centered'>
                    <Div className='animate__animated animate__lightSpeedInRight'>
                        <h4 className='title is-4'>Sign Up</h4>
                        <Logo />
                        <SignupForm />
                        <SignupNav />
                    </Div>
                </HeroBody>
            </section>
        </Wrapper>
    )
}

export default Signup