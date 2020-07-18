import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import API from '../../utils/API'
import { setIsLoggedIn } from '../../utils/Auth'


const LoginBtn = () => {
    const [ user ] = useContext(UserContext)

    //Btn logic
    const login = async user => {
        try {
            
            // const res = await API.login({user})
            // setIsLoggedIn(res.token)

        } catch (err) {
            //send err 
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        // login(user) 
        setIsLoggedIn('test-token')
    }
    
    
    //Return component jsx
    return (
        <button
        disabled={!(user.username && user.password)} 
        className='button is-block is-fullwidth is-primary is-medium is-rounded 
        animate__animated animate__rubberBand animate__delay-2s'
        type='submit' onClick={handleSubmit}>
            Login
        </button>

    )
}

export default LoginBtn