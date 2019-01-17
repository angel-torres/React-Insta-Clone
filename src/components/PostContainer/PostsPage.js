import React, { Component } from 'react';
import '../../App.css';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import Logout from '../Authenticate/Logout';


class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      searchInput: '',
    }
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData,
    })
  }

  handleChanges = e => {
      this.setState({
      searchInput: e.target.value,
    })
  }

  search = (e) => {
    e.preventDefault();

    if (this.state.searchInput === "") {
      this.setState({
        dummyData: dummyData,
      })
    } else {this.setState({
      dummyData: (this.state.dummyData.filter( post => post.username.includes(this.state.searchInput)))
    })}

  }

  logout = () => {
        localStorage.setItem("username", "");
        localStorage.setItem("password", "");
        console.log(localStorage)
  }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.search} handleChanges={this.handleChanges} searchInput={this.state.searchInput} />
        {this.state.dummyData.map( post => {
          return <PostContainer key={post.timestamp} post={post}/>
        })}
        <Logout logout={this.logout}/>
      </div>
    );
  }
}

export default PostsPage;