import * as React from "react";
import { hot } from 'react-hot-loader';
import {ThemeProvider, createMuiTheme, CssBaseline} from '@material-ui/core';
import {lightTheme, darkTheme} from 'core/themeProvider';
import { Home } from 'pages';
import { useState } from 'react';
import { AppHeader } from 'components/AppHeader';
import { AppMenu } from 'components/AppMenu';

const light = createMuiTheme(lightTheme);
const dark = createMuiTheme(darkTheme);

const Main = (_) => {
  const [useDark, setDark] = useState(false);
  return (
   <ThemeProvider theme={useDark? dark : light}>
    <CssBaseline/>
    <AppHeader toggleDark={() => {setDark(!useDark)}}/>
    <AppMenu/>
    <Home/>
   </ThemeProvider>
)};

export default hot(module)(Main);
