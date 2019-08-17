import React from 'react';
import {StyledButton} from '../StyledComponents'

function Logout(props) {
    return (
        <form><StyledButton className="login-button" onClick={props.logout}>Logout</StyledButton></form>
    )
}

export default Logout;
