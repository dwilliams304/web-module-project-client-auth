import React from "react";
import {Navigate, Outlet} from 'react-router-dom';


const PrivateRoute = ({component:Component, ...rest}) => {
    const auth = localStorage.getItem('token');
    return auth ? <Outlet /> : <Navigate to='/login' />
    //Outlet will render child elements
    //If auth is truthy (contains a token at all) -> render child elements
    //If auth is falsy (no token) -> Navigate back to the login form.
}

export default PrivateRoute;