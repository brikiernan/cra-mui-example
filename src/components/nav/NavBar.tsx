import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(()=> ({
  title: {
   flexGrow: 1
  },
  btn: {
    marginRight: '2rem'
  }
}));


export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar color='transparent' elevation={0}>
      <Toolbar>
        <Typography variant='h5' className={classes.title}>myHomeComp.com</Typography>
        <Button variant='text' className={classes.btn}>Sign In</Button>
        <Button variant='outlined'>Free Forever Account</Button>
      </Toolbar>
    </AppBar>
  );
};