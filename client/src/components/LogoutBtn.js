import React from 'react'
import { setIsLoggedOut } from '../utils/Auth'
import API from '../utils/API'

const LogoutBtn = () => {
  const logout = () => {
    setIsLoggedOut()
    API.post('api/user/logout')
  }

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  return (
    <button onClick={handleClick}>
      Log Out
    </button>
  )
}

export default LogoutBtn