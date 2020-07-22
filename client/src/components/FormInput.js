import React from 'react'
import { Input } from '../style/Login'

const FormInput = props => {
    return (
        <Input
            className='input is-medium is-rounded' {...props}
        />
    )
}

export default FormInput