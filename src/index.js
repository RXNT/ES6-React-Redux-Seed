/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import 'react-date-picker/index.css';
import 'react-select/dist/react-select.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ThemeProvider } from 'react-jss';

import configureStore from './store/configureStore';
import initialState from './store/initial.state';
import App from './containers/app';
import appConstants from './app.constants';
import '../assets/scss/styles.scss';
import muiTheme from './uicomponents/material-ui/mui-theme';
import reactTheme from './uicomponents/react-components/react-theme';


const store = configureStore(initialState);

render(
  <Provider store={store}>
    <ThemeProvider theme={reactTheme}>
      <MuiThemeProvider theme={muiTheme}>
        <div>
          <ReduxToastr
            timeOut={appConstants.toastr.timeOut}
            newestOnTop={true}
            preventDuplicates={true}
            position="top-right" />
          <App />
        </div>
      </MuiThemeProvider>
    </ThemeProvider>
  </Provider>
  , document.getElementById('app'));
