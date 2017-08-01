/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import 'react-date-picker/index.css';
import 'react-select/dist/react-select.css';

import configureStore from './store/configureStore';
import initialState from './store/initial.state';
import App from './containers/app';
import appConstants from './app.constants';
import '../assets/scss/styles.scss';

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <div>
      <ReduxToastr
        timeOut={appConstants.toastr.timeOut}
        newestOnTop={true}
        preventDuplicates={true}
        position="top-right" />
      <App />
    </div>
  </Provider>
  , document.getElementById('app'));
