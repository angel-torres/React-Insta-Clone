import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    console.log("constructor")
    super();
    this.state = {
      dummyData: [],
      searchInput: '',
    }
  }

  componentDidMount() {
    console.log("componentdidmount")
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

  render() {
    return (
      <div className="App">
        <SearchBar search={this.search} handleChanges={this.handleChanges} searchInput={this.state.searchInput} />
        {this.state.dummyData.map( post => {
          return <PostContainer key={post.timestamp} post={post}/>
        })}
      </div>
    );
  }
}

export default App;
