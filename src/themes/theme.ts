import { createTheme } from '@mui/material/styles';

const grey = {
  900: '#2B3445', // Main Text
  800: '#373F50', // Paragraph
  700: '#A7BEDA',
  600: '#94A4C4', // Low Priority form Title/Text
  500: '#A1AFCB',
  400: '#C3CFE7', // Border
  300: '#E0E9FB',
  200: '#E4EDFF', // Line Stroke
  100: '#F2F5F9'
};

const theme = createTheme({
  palette: {
    primary: {
      200: '#A4ADF6',
      light: '#8f85f2',
      main: '#4B10C9',
      dark: '#5148a7'
    },
    secondary: {
      main: '#F8BB39',
      contrastText: '#fff'
    },
    warning: {
      main: '#ED6C02',
      contrastText: '#fff'
    },
    error: {
      main: '#FC155A'
    },
    success: {
      main: '#00D495'
    },
    text: {
      primary: grey[900],
      secondary: grey[800],
      disabled: grey[400]
    },
    info: {
      main: '#0288D1'
    },
    grey,
    background: {
      default: grey[100]
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '60px !important',
          boxShadow: 'unset !important',
          textTransform: 'unset !important' as 'unset'
        }
      }
    }
  }
});

export default theme;
