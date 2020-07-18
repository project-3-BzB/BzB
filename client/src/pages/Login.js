import React from 'react'
import { UserProvider } from '../context/UserContext'
import LoginForm from '../components/login/LoginForm'
import LoginNav from '../components/login/LoginNav'
import Logo from '../components/Logo'
import img from '../img/bg_yellow.png'
import { Div, HeroBody, Wrapper } from '../style/Login'


const Login = () => {
    return (
        <UserProvider>
            <Wrapper img={img}>
                <section className='hero is-fullheight'>
                    <HeroBody className='hero-body has-text-centered'>
                        <Div className='animate__animated animate__backInDown'>
                            <h4 className='title is-4'>Log In</h4>
                            <Logo />
                            <LoginForm />
                            <LoginNav />
                        </Div>
                    </HeroBody>
                </section>
            </Wrapper>
        </UserProvider>
    )
}

export default Login