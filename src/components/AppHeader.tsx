import * as React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export const AppHeader = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">
          Mui Styleguide Demo
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
