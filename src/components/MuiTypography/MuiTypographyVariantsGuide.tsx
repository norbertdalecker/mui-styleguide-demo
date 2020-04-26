import * as React from "react";
import { Typography, Grid } from '@material-ui/core';
import { MuiTypographyItem } from 'components/MuiTypography';
export const MuiTypographyVariantsGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Variants
      </Typography>
      <Grid container spacing={2}>
        <MuiTypographyItem variant="h1" name="h1. Heading"/>
        <MuiTypographyItem variant="h2" name="h2. Heading"/>
        <MuiTypographyItem variant="h3" name="h3. Heading"/>
        <MuiTypographyItem variant="h4" name="h4. Heading"/>
        <MuiTypographyItem variant="h5" name="h5. Heading"/>
        <MuiTypographyItem variant="h6" name="h6. Heading"/>
        <MuiTypographyItem variant="subtitle1" name="subtitle1 text"/>
        <MuiTypographyItem variant="subtitle2" name="subtitle2 text"/>
        <MuiTypographyItem variant="body1" name="body1 text"/>
        <MuiTypographyItem variant="body2" name="body2 text"/>
        <MuiTypographyItem variant="button" name="button text"/>
        <MuiTypographyItem variant="caption" name="caption text"/>
        <MuiTypographyItem variant="overline" name="overline text"/>
      </Grid>
    </>
  );
}
