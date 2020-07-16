import React from 'react'
import { Link } from 'react-router-dom'

const LoginNav = () => {

    return (
        <nav className='level'>
            <div className='level-item has-text-centered'>
                <div>
                    <a href='google.com'>Forgot Password?</a>
                </div>
            </div>
            <div className='level-item has-text-centered'>
                <div>
                    <Link to='/signup'>Create an Acount</Link>
                </div>
            </div>
        </nav>
    )
}

export default LoginNav