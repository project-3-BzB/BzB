import React from 'react'

import SignupBtn from './SignupBtn'
import FormInput from '../FormInput'


const SignupForm = () => {
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
                        autoComplete='name'
                    />
                </div>
            </div>
            <div className='form-heading'>Email</div>
            <div className='field'>
                <div className='control'>
                    <FormInput
                        type='email'
                        placeholder='hello@example.com'
                        autoComplete='username'
                    />
                </div>
            </div>
            <div className='form-heading'>Password</div>
            <div className='field'>
                <div className='control'>
                    <FormInput 
                        type='password' 
                        placeholder='**********' 
                        autoComplete='current-password'
                    />
                </div>
            </div>
            <SignupBtn />
        </form>
    )
}

export default SignupForm