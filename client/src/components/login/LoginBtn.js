import React, { useContext } from 'react'
import { UserContext } from '../../utils/UserContext'
import API from '../../utils/API'
import { setIsLoggedIn } from '../../utils/Auth'
import { useHistory } from 'react-router-dom'
import { FoldersContext } from '../../utils/FolderContext'


const LoginBtn = () => {
    const [ user, setUser ] = useContext(UserContext)
    const [folders, setFolders] = useContext(FoldersContext)
    const history = useHistory()
    //Btn logic
    const login = async (user) => {
        try {
            
          const res = await API.post('api/user/login', {username: user.username, password: user.password})
          if(res.data) {
            setIsLoggedIn(res.data._id)
            setUser({})
            setFolders({ userId: res.data._id })
            history.push('/home')
          }
        } catch (err) {
            console.log(err)
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        login(user)
    }
    
    //Return component jsx
    return (
        <button
        disabled={!(user.username && user.password)} 
        className='button is-block is-fullwidth is-primary is-medium is-rounded 
        animate__animated animate__rubberBand animate__delay-2s'
        // type='submit' 
        onClick={handleSubmit}>
            Login
        </button>

    )
}

export default LoginBtn