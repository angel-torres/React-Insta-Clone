import React from 'react';
// import "./Login.css";
import styled from 'styled-components';
import {StyledButton, LogInInput, LogInForm} from '../StyledComponents'

// const StyledButton = styled.button`
//     padding: 10px;
//     width: 100px;
//     margin: 20px;
//     background-color: white;

//     &:hover {
//         background-color: black;
//         color: white;
//     }
// `;

// const LogInInput = styled.input`
//     margin: 20px;
//     width: 200px;
//     height: 30px;
//     text-align: center;
// `;

// const LogInForm = styled.form`
//     border: 2px solid lightgrey;
//     width: 500px;
//     margin: auto auto;
//     margin-top: 200px;
//     display: flex;
//     flex-direction: column;
//     border-radius: 10px;
//     align-items: center;
// `;


class LoginPage extends React.Component {
  
    login() {
        localStorage.setItem("username", document.getElementById("username").value);
        localStorage.setItem("password", document.getElementById("password").value);
    }

    render() {
        return (
        <LogInForm className="login-form">
            <div className="left-search-container">
                <img className="insta-logo" src="https://img.icons8.com/ios/30/000000/instagram-new.png"/>
                <h1>Instagram</h1>
            </div>
            <LogInInput className="login-input" placeholder="username" type="text" id="username" />
            <LogInInput className="login-input" placeholder="password" type="password" id="password" />
            <StyledButton className="login-button" 
                onClick={this.login}>Log In
            </StyledButton>
        </LogInForm>
        )
    }
}

export default LoginPage;