import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ isFetching, handleSearch }) => (
  <div className="search">
    <input
      type="search"
      placeholder="Digite o nome do usuário do Github"
      disabled={isFetching}
      onKeyUp={handleSearch}
    />
  </div>
);

Search.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,

};

export default Search;
