import * as React from "react";
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import Brightness4 from '@material-ui/icons/Brightness4';

export interface AppHeaderProps {
  toggleDark: () => void
}
export const AppHeader = (props: AppHeaderProps) => {
  const {toggleDark} = props;
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'start'}}>
          Mui Styleguide Demo
        </Typography>
        <IconButton onClick={toggleDark} color="inherit">
          <Brightness4/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
