import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './services/History';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './App';
import { StoreProvider } from './stores/StoreContext';
import stores from './stores';

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
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <StoreProvider stores={stores}>
        <App />
      </StoreProvider>
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root')
);
