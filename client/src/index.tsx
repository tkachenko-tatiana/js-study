import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
