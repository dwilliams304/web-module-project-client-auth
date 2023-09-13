import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AddFriend = () => {
    const nav = useNavigate();

    const [inputValues, setInputValues] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = e => {
        const {name, value} = e.target;

        setInputValues({
            ...inputValues,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        axios.post('http://localhost:9000/api/friends', inputValues, {headers: {authorization: token}})
            .then(res => {
                console.log(res);
                nav('/friends');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div>
            <h3>Add Friend</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='name'
                    placeholder="Enter friend's name..."
                    onChange={handleChange}
                /><br/>
                <input 
                    type='number'
                    name='age'
                    placeholder="Enter friend's age..."
                    onChange={handleChange}
                /><br/>
                <input 
                    type='text'
                    name='email'
                    placeholder="Enter friend's email..."
                    onChange={handleChange}
                /><br/>
                <input 
                    type='submit'
                    value='Add Friend!'
                />
            </form>
        </div>
    )
}

export default AddFriend;