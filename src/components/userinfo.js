import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userinfo }) => (

  <div className="user-info">

    <img src={userinfo.photo} alt={userinfo.username} />
    <h1 className="username">
      <a href={`https://github.com/${userinfo.login}`} rel="noopener noreferrer" target="_blank">
        {userinfo.username}
      </a>
    </h1>
    <ul className="repos-info">
      <li>
        Repositórios:
        {userinfo.repos}
      </li>
      <li>
        Seguidores:
        {userinfo.followers}
      </li>
      <li>
        Seguindo:
        {userinfo.following}
      </li>
    </ul>
  </div>
);

UserInfo.defaultProps = {
  userinfo: '',
};

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.arrayOf(PropTypes.array).isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }),
};

export default UserInfo;
