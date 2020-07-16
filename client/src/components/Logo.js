import React from 'react'
import logo from '../logo.png'
import { Img } from '../style/Logo'

const Logo = () => {
    return (
        <Img 
        className='logo animate__animated animate__bounceInRight animate__delay-1s' 
        src={logo} 
        width='100px' 
        alt='BzB logo'
        />
    )
}

export default Logo