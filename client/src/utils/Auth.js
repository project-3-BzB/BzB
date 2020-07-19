// import { useContext } from 'react'
// import { UserContext } from '../context/UserContext'


export const setIsLoggedIn = data => {
    localStorage.setItem('token', data)
}

export const setIsLoggedOut = () => {
    localStorage.removeItem('token')
}

const getIsLoggedIn = () => {
    return localStorage.getItem('token')
}

export const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      if (getIsLoggedIn()) {
        next()
      }
      next.redirect('/login')
    } else {
      next()
    }
}
