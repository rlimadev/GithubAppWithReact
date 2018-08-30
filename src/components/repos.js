import React from 'react';
import PropTypes from 'prop-types';

const Repos = ({ className, title, repos }) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={String(index)}><a href={repo.link}>{repo.name}</a></li>
      ))}
    </ul>
  </div>
);

Repos.defaultProps = {
  className: '',
  repos: [],
};

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.array),
};

export default Repos;
