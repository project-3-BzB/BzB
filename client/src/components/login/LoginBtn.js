import React from 'react'

const LoginBtn = () => {

    //Btn logic
    function handleSubmit() {

    }
    
    //Return component jsx
    return (
        <button 
        className='button is-block is-fullwidth is-primary is-medium is-rounded 
        animate__animated animate__rubberBand animate__delay-2s'
        type='submit' onSubmit={handleSubmit}>
            Login
        </button>

    )
}

export default LoginBtn