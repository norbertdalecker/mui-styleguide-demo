import * as React from "react";
import { Typography, AppBar, Toolbar, PropTypes, IconButton } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
import {Menu, AccountCircle} from '@material-ui/icons';
export const MuiAppBarGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      AppBar
      </Typography>
      <MuiInputContainer>
      {['primary', 'secondary', 'default'].map((variant: PropTypes.Color) => {
        return (<AppBar key={variant} color={variant} position="static">
                  <Toolbar>
                    <IconButton
                      edge="start"
                      color="inherit"
                    >
                      <Menu/>
                    </IconButton>
                    <Typography style={{ flexGrow: 1, textAlign: 'start'}} variant="h6">
                      {variant} appbar
                    </Typography>
                      <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </Toolbar>
                </AppBar>);
      })}

      </MuiInputContainer>
    </>
  );
}
