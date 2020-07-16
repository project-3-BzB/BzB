import React from 'react'

const FormInput = ({ type, placeholder, autocomplete }) => {
    return (
        <input
            className='input is-medium is-rounded'
            type={type}
            placeholder={placeholder}
            autocomplete={autocomplete}
            required
        />
    )
}

export default FormInput