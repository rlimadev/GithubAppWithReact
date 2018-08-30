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
          fetch(result.repos_url)
            .then(response => response.json())
            .then((reposResult) => {
              console.log(reposResult, 'reposResult');
              this.setState({
                repos: reposResult.map(data => ({ name: data.name, link: data.html_url })),
              });
            });


          const starredURL = result.starred_url;
          fetch(starredURL.replace('{/owner}{/repo}', ''))
            .then(response => response.json())
            .then((reposResultStarred) => {
              console.log(reposResultStarred, 'reposStarred');
              this.setState({
                starred: reposResultStarred.map(dataStarred => (
                  { name: dataStarred.name, link: dataStarred.html_url })),
              });
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
      />
    );
  }
}

export default App;
