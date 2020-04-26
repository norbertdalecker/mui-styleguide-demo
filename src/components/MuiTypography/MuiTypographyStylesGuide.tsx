import * as React from "react";
import { Typography, Grid, Box } from '@material-ui/core';

export const MuiTypographyStylesGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Sytles
      </Typography>
      <Grid container spacing={2}>
      <Typography component="div">
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
      </Grid>
    </>
  );
}
