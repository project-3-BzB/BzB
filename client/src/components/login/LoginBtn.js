import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import API from '../../utils/API'
import { setIsLoggedIn } from '../../utils/Auth'
import { useHistory } from 'react-router-dom'


const LoginBtn = () => {
    const [ user ] = useContext(UserContext)
    const history = useHistory()
    //Btn logic
    const login = async (user) => {
        try {
            
            // const res = await API.post('api/user/login', {username: user.username, password: user.password})
            // setIsLoggedIn(res.token)

        } catch (err) {
            //send err 
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        // login(user) 
        history.push('/home')
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