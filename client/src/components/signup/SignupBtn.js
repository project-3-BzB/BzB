import React, { useContext } from 'react'
import { UserContext } from '../../utils/UserContext'
import API from '../../utils/API'
import { useHistory } from 'react-router-dom'

const SignupBtn = () => {
    const [ user ] = useContext(UserContext)
    const history = useHistory()
    //Btn logic
    const signup = async user => {
        try {
            const res = await API.post('/api/user/signup',{
                email: user.email, 
                username: user.username, 
                password: user.password
            })
            console.log(res)
        } catch (err) {
            console.log(err)
        } 
    }

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(user)
        signup(user)
        // history.push('/login')
    }
    
    //Return component jsx
    return (
        <button 
        disabled={!(user.username && user.password && user.email)}
        className='button is-block is-fullwidth is-primary is-medium is-rounded 
            animate__animated animate__rubberBand animate__delay-2s'
        // type='submit'
         onClick={handleSubmit}>
            Sign Up
        </button>
    )
}

export default SignupBtn