import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

ReactDOM.render(
  React.createElement(App),
  /* eslint-disable */
  document.querySelector('[data-js="app"]'), 
);
