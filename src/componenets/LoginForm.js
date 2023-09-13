import React, { useState } from 'react';

const LoginForm = props => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        const {name, value} = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }
    return(
        <div>
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='username'
                    placeholder='Enter username...'
                    onChange={handleChange}
                /><br/>
                <input 
                    type='password'
                    name='password'
                    placeholder='Enter password...'
                    onChange={handleChange}
                /><br/>
                <input
                    type='submit'
                    value='LOGIN'
                />
            </form>
        </div>
    )
}

export default LoginForm;