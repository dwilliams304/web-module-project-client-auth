import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
    const nav = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/logout', {},{headers: {authorization: token}})
            .then(res => {
                localStorage.removeItem('token');
                nav('/login');
            })
            .catch(err => console.log(err))
    }, [])

    return(<></>)
}


export default Logout;