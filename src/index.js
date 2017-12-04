import React from 'react';
import { render } from 'react-dom';

import configureStore from './redux/configureStore';
import reducers from './redux/reducers';
import config from './config';
import Root from './Root';

const store = configureStore(config, reducers);

render(
  <Root store={store}/>,
  document.getElementById('root')
);