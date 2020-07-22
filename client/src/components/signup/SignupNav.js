import React from 'react'
import { Link } from 'react-router-dom'

const SignupNav = () => {

    return (
        <nav className='level'>
            <div className='level-item has-text-centered'>
                <div>
                    <a href='#'>Forgot Password?</a>
                </div>
            </div>
            <div className='level-item has-text-centered'>
                <div>
                    <Link to='/login'>Log In</Link>
                </div>
            </div>
        </nav>
    )
}

export default SignupNav