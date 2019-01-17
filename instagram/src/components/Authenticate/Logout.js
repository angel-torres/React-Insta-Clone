import React from 'react';
import './Login.css';

function Logout(props) {
    return (
        <form><button className="login-button" onClick={props.logout}>Logout</button></form>
    )
}

export default Logout;
