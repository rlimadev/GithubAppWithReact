import React from 'react';
import PropTypes from 'prop-types';
import Search from './search';
import UserInfo from './userinfo';
import Actions from './actions';
import Repos from './repos';


const AppContent = ({
  userinfo, repos, starred, handleSearch, getRepos, getStarred,
}) => (
  <div className="app">
    <Search handleSearch={handleSearch} />
    {!!userinfo.username && <UserInfo userinfo={userinfo} />}
    {!!userinfo.username && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length && (<Repos className="repos" title="Repositórios:" repos={repos} />)}

    {!!starred.length && (<Repos className="starred" title="Favoritos:" repos={starred} />)}

  </div>
);

AppContent.propTypes = {
  userinfo: PropTypes.objectOf(PropTypes.string).isRequired,
  repos: PropTypes.objectOf(PropTypes.object).isRequired,
  starred: PropTypes.arrayOf(PropTypes.array).isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
};

export default AppContent;
