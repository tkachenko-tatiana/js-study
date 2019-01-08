import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {  Provider } from 'mobx-react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import User from './models/User';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgb(225, 0, 80)',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Provider store={User}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
