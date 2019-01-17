import React from 'react';
import "./Login.css";


class LoginPage extends React.Component {
  
    login() {
        localStorage.setItem("username", document.getElementById("username").value);
        localStorage.setItem("password", document.getElementById("password").value);
    }

    render() {
        return (
        <form className="login-form">
            <div className="left-search-container">
                <img className="insta-logo" src="https://img.icons8.com/ios/30/000000/instagram-new.png"/>
                <h1>Instagram</h1>
            </div>
            <input className="login-input" placeholder="username" type="text" id="username" />
            <input className="login-input" placeholder="password" type="password" id="password" />
            <button className="login-button" 
                onClick={this.login}>Log In
            </button>
        </form>
        )
    }
}

export default LoginPage;