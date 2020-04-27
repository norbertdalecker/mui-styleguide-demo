import * as React from "react";
import { Typography, Link } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
export const MuiLinkGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Links
      </Typography>
      <MuiInputContainer>
        <Link href="#">
          Link
        </Link>
        <Link href="#" color="inherit">
          {'color="inherit"'}
        </Link>
        <Link href="#" variant="body2">
          {'variant="body2"'}
        </Link>
      </MuiInputContainer>
    </>
  );
}
