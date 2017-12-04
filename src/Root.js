import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/App';
import Routes from './routes';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <App
          defaultThemeName="barebones"
          defaultThemeShade="light"
        >
          <Routes />
        </App>
      </Router>
    </Provider>
  );
}
