import * as React from "react";
import { Typography, Box } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';

export const MuiTypographyStylesGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Sytles
      </Typography>
      <MuiInputContainer>
      <Typography variant="h6">
        <Box fontStyle="normal" m={1}>
          Normal font style.
        </Box>
        <Box fontStyle="italic" m={1}>
          Italic font Style.
        </Box>
        <Box fontStyle="oblique" m={1}>
          Oblique font style.
        </Box>
      </Typography>
      </MuiInputContainer>
    </>
  );
}
