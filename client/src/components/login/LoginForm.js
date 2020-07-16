import React from 'react'

import LoginBtn from './LoginBtn'
import FormInput from '../FormInput'


const LoginForm = () => {
    //Form logic

    //Return jsx component
    return (
        <form>
            <div className='form-heading'>Username</div>
            <div className='field'>
                <div className='control'>
                    <FormInput 
                    type='name' 
                    placeholder='Your Username' 
                    autoComplete='name' />
                </div>
            </div>
            <div className='form-heading'>Password</div>
            <div className='field'>
                <div className='control'>
                    <FormInput 
                    type='password' 
                    placeholder='**********' 
                    autoComplete='current-password'/>
                </div>
            </div>
            <LoginBtn />
        </form>
    )
}

export default LoginForm