import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './App';

const theme = createMuiTheme({
  palette: {},
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <App />
      </React.Fragment>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
