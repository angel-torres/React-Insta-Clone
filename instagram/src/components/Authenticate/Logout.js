import React from 'react';
import './Login.css';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px;
    width: 100px;
    margin: 20px;
    background-color: white;

    &:hover {
        background-color: black;
        color: white;
    }
`;

function Logout(props) {
    return (
        <form><StyledButton className="login-button" onClick={props.logout}>Logout</StyledButton></form>
    )
}

export default Logout;
