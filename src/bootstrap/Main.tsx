import * as React from "react";
import { hot } from 'react-hot-loader';
import {ThemeProvider, createMuiTheme, CssBaseline} from '@material-ui/core';
import {materialTheme} from 'core/themeProvider';
import { Home } from 'pages';

const theme = createMuiTheme(materialTheme);
const Main = (_) => (
   <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Home/>
   </ThemeProvider>
);

export default hot(module)(Main);
