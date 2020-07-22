import React from 'react'
import { useHistory } from 'react-router-dom'
import { setIsLoggedOut } from '../utils/Auth'
import API from '../utils/API'

const LogoutBtn = () => {
  const history = useHistory()
  const logout = () => {
    setIsLoggedOut()

      history.push('/login')

  }

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  return (
    <button className='button is-small is-rounded is-danger is-light' onClick={handleClick}>
      Log Out
    </button>
  )
}

export default LogoutBtn