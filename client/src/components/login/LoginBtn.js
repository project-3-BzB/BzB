import React, { useEffect, useContext } from 'react'
import API from '../../utils/API'
import { setIsLoggedIn } from '../../utils/Auth'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../utils/UserContext'
import { FoldersContext } from '../../utils/FolderContext'
import Folders from '../../pages/Folders'


const LoginBtn = () => {
  const [user, setUser] = useContext(UserContext)  
  // const [folders, setFolders] = useContext(FoldersContext)
  const history = useHistory()
  // let id

  // useEffect(() => {
    // return cleanup()
  // }, [])

  // function cleanup() {
    // setFolders({userId: 1234})
    // setUser({})
  // }

  async function login(user) {
    try {
      const res = await API.post('api/user/login', 
      {username: user.username, password: user.password})
      
      // setFolders({...folders, userId: res.data._id})
      setUser({})
      setIsLoggedIn(res.data._id)
      history.push('/folders')
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