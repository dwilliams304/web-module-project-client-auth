import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const push = useNavigate();

    const handleChange = e => {
        const {name, value} = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:9000/api/login", credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                push('/friends');
            })
            .catch(err => {
                console.log(err);
            })
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