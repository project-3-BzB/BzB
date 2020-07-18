// import { useContext } from 'react'
// import { UserContext } from '../context/UserContext'


export const setIsLoggedIn = data => {
    localStorage.setItem('token', data)
}

export const getIsLoggedIn = () => {
    return localStorage.getItem('token')
}

export const setIsLoggedOut = () => {
    localStorage.removeItem('token')
}
