import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app';

import { ExampleProvider } from './store/example/context';

ReactDOM.render(
  <ExampleProvider>
    <App />
  </ExampleProvider>,
  document.getElementById('appContainer')
);
