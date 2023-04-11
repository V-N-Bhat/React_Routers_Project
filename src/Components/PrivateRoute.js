import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn,children}) => {
    const navigate=useNavigate();
    if(isLoggedIn){
        return children;
    }
    else{
        return <Navigate to='/login' />
    }
    console.log("error in authentication")
}

export default PrivateRoute