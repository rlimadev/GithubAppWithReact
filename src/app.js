import React, { Component } from 'react';
import AppContent from './components/app-content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
    };
  }

  getRepos(type) {
    fetch(`https://api.github.com/users/${this.state.userinfo.login}/${type}`)
      .then(response => response.json())
      .then((reposResult) => {
        console.log(reposResult, 'reposResult');
        this.setState({
          [type]: reposResult.map(data => ({ name: data.name, link: data.html_url })),
        });
      });
  }

  handleSearch(e) {
    this.value = e.target.value;
    this.keyCode = e.which || e.keyCode;
    this.ENTER = 13;

    if (this.keyCode === this.ENTER) {
      fetch(`https://api.github.com/users/${this.value}`)
        .then(response => response.json())
        .then((result) => {
          console.log(result);
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
            },
          });
        });
    } 
  }

  render() {
    return (
      <AppContent
        userinfo={Object(this.state.userinfo)}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={e => this.handleSearch(e)}
        getRepos={() => this.getRepos('repos')}
        getStarred={() => this.getRepos('starred')}
      />
    );
  }
}

export default App;
