import * as React from "react";
import { AppBar, Toolbar, Typography, IconButton, Theme, makeStyles, createStyles } from '@material-ui/core';
import Brightness4 from '@material-ui/icons/Brightness4';

export interface AppHeaderProps {
  toggleDark: () => void
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  }
));
export const AppHeader = (props: AppHeaderProps) => {
  const classes = useStyles();
  const {toggleDark} = props;
  return (
    <AppBar className={classes.appBar} position="sticky">
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
