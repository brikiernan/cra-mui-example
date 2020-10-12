import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
export default createMuiTheme({
  palette: {
    primary: {
      main: '#f00'
    },
    secondary: {
      main: '#0f0'
    },
    background: {
      default: '#e3f2fd'
    }
  },
  typography: {
    fontFamily: 'Barlow',
  },
  shape: {
    borderRadius: 0
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    }
  },
  props: {
    MuiButton: {
      disableRipple: true,
      variant: 'contained',
      disableElevation: true
    }
  }
});