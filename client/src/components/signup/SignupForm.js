import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import SignupBtn from './SignupBtn'
import FormInput from '../FormInput'


const SignupForm = () => {
    const [user, setUser] = useContext(UserContext)
    //Form logic
    const handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        setUser({...user, [name]: value.trim()})
    }

    //Return jsx component
    return (
        <form>
            <div className='form-heading'>Username</div>
            <div className='field'>
                <div className='control'>
                    <FormInput
                        name='username'
                        type='name'
                        placeholder='Your Username'
                        autoComplete='name'
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='form-heading'>Email</div>
            <div className='field'>
                <div className='control'>
                    <FormInput
                        name='email'
                        type='email'
                        placeholder='hello@example.com'
                        autoComplete='username'
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='form-heading'>Password</div>
            <div className='field'>
                <div className='control'>
                    <FormInput
                        name='password' 
                        type='password' 
                        placeholder='**********' 
                        autoComplete='current-password'
                        onChange={handleChange}
                    />
                </div>
            </div>
            <SignupBtn />
        </form>
    )
}

export default SignupForm