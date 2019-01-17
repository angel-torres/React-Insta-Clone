import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import authenticate from './components/Authenticate/authenticate';
import LogInPage from './components/Authenticate/LogInPage'


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
    }
  }

  setLocalStorage() {
    localStorage.setItem("username", document.getElementById("username").value);
    localStorage.setItem("password", document.getElementById("password").value);
    console.log('button works')
}

  render() {
 
    console.log(localStorage)
    return (
      <div className="App">
        <Display setLocalStorage={this.setLocalStorage} username={this.state.username} password={this.state.password} />
      </div>
    );
  }
}

const Display = authenticate(LogInPage)(PostsPage);

export default App;
