import React from 'react'
import logo from '../logo.png'

const Logo = () => {
    return (
        <img 
        class='logo animate__animated animate__bounceInRight animate__delay-1s' 
        src={logo} 
        width='100px' 
        alt='BzB logo'
        />
    )
}

export default Logo