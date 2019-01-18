import React from 'react';
import {StyledButton, LogInInput, LogInForm, StyledInstaLogo, StyledLeftSearchContainer} from '../StyledComponents'

class LoginPage extends React.Component {
  
    login() {
        localStorage.setItem("username", document.getElementById("username").value);
        localStorage.setItem("password", document.getElementById("password").value);
    }

    render() {
        return (
        <LogInForm >
            <StyledLeftSearchContainer >
                <StyledInstaLogo  src="https://img.icons8.com/ios/30/000000/instagram-new.png"/>
                <h1>Instagram</h1>
            </StyledLeftSearchContainer>
            <LogInInput  placeholder="username" type="text" id="username" />
            <LogInInput  placeholder="password" type="password" id="password" />
            <StyledButton
                onClick={this.login}>Log In
            </StyledButton>
        </LogInForm>
        )
    }
}

export default LoginPage;