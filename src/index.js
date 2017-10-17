/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import 'react-date-picker/index.css';
import 'react-select/dist/react-select.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureStore from './store/configureStore';
import initialState from './store/initial.state';
import App from './containers/app';
import appConstants from './app.constants';
import '../assets/scss/styles.scss';
import theme from './uicomponents/material-ui/mui-Theme';

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <div>
        <ReduxToastr
          timeOut={appConstants.toastr.timeOut}
          newestOnTop={true}
          preventDuplicates={true}
          position="top-right" />
        <App />
      </div>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('app'));
