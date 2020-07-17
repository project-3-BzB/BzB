import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import API from '../../utils/API'

const LoginBtn = () => {
    const [ user ] = useContext(UserContext)

    //Btn logic
    const handleSubmit = e => {
        e.preventDefault()
        // API.login(user)
    }
    
    //Return component jsx
    return (
        <button 
        className='button is-block is-fullwidth is-primary is-medium is-rounded 
        animate__animated animate__rubberBand animate__delay-2s'
        type='submit' onClick={handleSubmit}>
            Login
        </button>

    )
}

export default LoginBtn