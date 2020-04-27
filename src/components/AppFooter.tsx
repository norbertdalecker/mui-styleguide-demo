import * as React from "react";
import { AppBar, Toolbar, Typography, IconButton, makeStyles, Theme, createStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { GitlabIcon } from 'components/GitlabIcon';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.background.default,
      zIndex: theme.zIndex.drawer + 1,
      bottom: 0,
      top: 'auto'
    },
  }
));

export const AppFooter = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.footer} position="relative" color="transparent">
      <Toolbar style={{justifyContent: 'center'}}>
        <Typography variant="body1">
          @norbertdalecker, 2020
        </Typography>
        <IconButton
          onClick={()=> window.location.assign('https://gitlab.com/norbertdalecker')}
          color="inherit"
        >
          <GitlabIcon />
        </IconButton>
        <IconButton
          onClick={()=> window.location.assign('https://github.com/norbertdalecker')}
          color="inherit"
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
