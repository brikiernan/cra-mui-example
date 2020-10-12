import React from 'react';
import { CssBaseline, TextField, ThemeProvider, Typography } from '@material-ui/core';
import NavBar from '../components/nav/NavBar';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Typography>Get Your Free HomeComp</Typography>
      <Typography>The easy way to find out what homes like yours are selling for in your neighborhood today.</Typography>
       <TextField id="filled-basic" label="Filled" variant="filled" />
    </ThemeProvider>
  );
}

export default App;
