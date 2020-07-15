import React from 'react'

import LoginBtn from './LoginBtn'
import EmailInput from './EmailInput'
import PWInput from './PWInput'

//LOGIN PAGE MOCKUP

const LoginForm = () => {
    //Form logic

    //Return jsx component
    return (
        <form>
            <div className='field'>
                <div className='control'>
                    <EmailInput />
                </div>
            </div>
            <div className='field'>
                <div className='control'>
                    <PWInput />
                </div>
            </div>
            <LoginBtn />
        </form>
    )
}

export default LoginForm