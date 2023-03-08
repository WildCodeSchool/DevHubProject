import { ThemeOptions } from '@mui/material/styles';

export const ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffb612',
    },
    secondary: {
      main: '#e05206',
    },
    background: {
      default: '#d7d7d7',
      paper: '#00112B',
    },
    text: {
      hint: '#333333',
      secondary: '#ffb612',
      disabled: '#b37e01',
      primary: '#d7d7d7',
    },
    error: {
      main: '#d52b1e',
    },
    warning: {
      main: '#cd0037',
    },
    info: {
      main: '#009aa6',
    },
    success: {
      main: '#82be00',
    },
    divider: '#675c53',
  },
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
  },
};