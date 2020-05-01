import * as React from "react";
import { hot } from 'react-hot-loader';
import {ThemeProvider, createMuiTheme, CssBaseline, responsiveFontSizes} from '@material-ui/core';
import {lightTheme, darkTheme} from 'core/themeProvider';
import { Home } from 'pages';
import { useState } from 'react';
import { AppHeader } from 'components/AppHeader';
import { AppMenu } from 'components/AppMenu';
import { AppFooter } from 'components/AppFooter';

const light = responsiveFontSizes(createMuiTheme(lightTheme));
const dark = responsiveFontSizes(createMuiTheme(darkTheme));

const Main = (_) => {
  const [useDark, setDark] = useState(false);
  return (
   <ThemeProvider theme={useDark? dark : light}>
    <CssBaseline/>
    <AppHeader toggleDark={() => {setDark(!useDark)}}/>
    <div style={{display: 'flex'}}>
          <AppMenu/>
          <Home/>
        </div>
    <AppFooter/>
   </ThemeProvider>
)};

export default hot(module)(Main);
