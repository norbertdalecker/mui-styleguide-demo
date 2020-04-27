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
      <Typography>
        <Link href="#">
          Link
        </Link>
      <Typography>
      </Typography>
        <Link href="#" color="inherit">
          {'color="inherit"'}
        </Link>
      <Typography>
      </Typography>
        <Link href="#" variant="body2">
          {'variant="body2"'}
        </Link>
      </Typography>
      </MuiInputContainer>
    </>
  );
}
