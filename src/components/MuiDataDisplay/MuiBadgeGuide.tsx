import * as React from "react";
import { Typography, Badge } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
import { Mail } from '@material-ui/icons';
export const MuiBadgeGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Badge
      </Typography>
      <MuiInputContainer>
        <Badge badgeContent={4} color="primary">
          <Typography>Primary <Mail /></Typography>
        </Badge>
        <Badge badgeContent={4} color="secondary">
          <Typography>Secondary <Mail /></Typography>
        </Badge>
        <Badge badgeContent={4} color="error">
          <Typography>Error <Mail /></Typography>
        </Badge>
        <Badge badgeContent={4} color="default">
          <Typography>Default <Mail /></Typography>
        </Badge>
        <br/>
        <Badge color="secondary" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} variant="dot">
          <Typography>Top Left</Typography>
        </Badge>
        <Badge color="secondary" anchorOrigin={{ vertical: 'top', horizontal: 'right', }} variant="dot">
          <Typography>Top Right</Typography>
        </Badge>
        <Badge color="secondary" anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} variant="dot">
          <Typography>Bottom Left</Typography>
        </Badge>
        <Badge color="secondary" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot">
          <Typography>Bottom Right</Typography>
        </Badge>
      </MuiInputContainer>
    </>
  );
}
