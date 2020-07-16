import React from 'react'
import { Input } from '../style/Login'

const FormInput = ({ type, placeholder, autocomplete }) => {
    return (
        <Input
            className='input is-medium is-rounded'
            type={type}
            placeholder={placeholder}
            autoComplete={autocomplete}
            required
        />
    )
}

export default FormInput