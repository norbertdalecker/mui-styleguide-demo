import * as React from "react";
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { GitlabIcon } from 'components/GitlabIcon';

export const AppFooter = () => {
  return (
    <AppBar style={{bottom: 0, top: 'auto'}} position="relative" color="transparent">
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
