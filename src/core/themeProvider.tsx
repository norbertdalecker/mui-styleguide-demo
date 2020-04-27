import { ThemeOptions } from '@material-ui/core/styles';
const base: ThemeOptions = {
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
    }
  }
}
export const darkTheme: ThemeOptions = Object.assign({},base,{
  palette: {
    type: 'dark',
    primary: {
      main: '#444444',
    },
    action:{
      disabledBackground: '#121212',
      hover: '#7c7c80'
    },
    divider: '#ffffff',
    background:{
      paper: '#212121',
      default: '#7c7c80',
    },
    secondary:{
      main: '#bf5808',
    }
  }
});
export const lightTheme: ThemeOptions = Object.assign({},base,{
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
  }
});
