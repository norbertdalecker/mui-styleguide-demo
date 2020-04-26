import { ThemeOptions } from '@material-ui/core/styles';
export const materialTheme: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      50: '#e7e9ea',
      100: '#c3c8ca',
      200: '#9ba3a7',
      300: '#737e84',
      400: '#556369',
      500: '#37474f',
      main: '#37474f',
      600: '#314048',
      700: '#2a373f',
      800: '#232f36',
      900: '#162026',
      A100: '#6ac6ff',
      A200: '#37b2ff',
      A400: '#049fff',
      A700: '#0090ea',
    },
  },
  typography: {
    h4: {
      marginTop: '24px'
    }
  },
  spacing: 8,
  overrides: {
    MuiDivider:{
      root:{
        marginBottom: 24,
      }
    },
    MuiPaper:{
      rounded:{
        padding: '24px 16px 24px 16px'
      }
    }
  }
}
