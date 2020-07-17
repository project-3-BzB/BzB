// import { useContext } from 'react'
// import { UserContext } from '../context/UserContext'


export const setIsLoggedIn = data => {
    // const [user, setUser] = useContext(UserContext)
    localStorage.setItem('token', data)
}

export const getIsLoggedIn = () => {
    return localStorage.getItem('token')
}

export const setIsLoggedOut = () => {
    localStorage.removeItem('token')
}