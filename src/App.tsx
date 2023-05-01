import React from 'react';
import { Provider } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';

import Routes from './routes';
import store from './store';
import theme from './themes/theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
