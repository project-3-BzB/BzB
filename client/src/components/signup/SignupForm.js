import React from 'react'

import SignupBtn from './SignupBtn'
import FormInput from '../FormInput'
// import EmailInput from '../EmailInput'
// import PWInput from '../PWInput'
// import UsernameInput from '../UsernameInput'


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
                        autocomplete='name'
                    />
                </div>
            </div>
            <div className='form-heading'>Email</div>
            <div className='field'>
                <div className='control'>
                    <FormInput
                        type='email'
                        placeholder='hello@example.com'
                        autocomplete='username'
                    />
                </div>
            </div>
            <div className='form-heading'>Password</div>
            <div className='field'>
                <div className='control'>
                    <FormInput 
                        type='password' 
                        placeholder='**********' 
                        autocomplete='current-password'
                    />
                </div>
            </div>
            <SignupBtn />
        </form>
    )
}

export default SignupForm