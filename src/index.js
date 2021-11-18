import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// importing global css frameworks, libraries & addons...
import 'bulma/css/bulma.min.css';
import './assets/fonts/fontStyles.css';
import './assets/vendors/font-awesome-animation.min.css';
import './assets/vendors/hover-min.css';
import './global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);