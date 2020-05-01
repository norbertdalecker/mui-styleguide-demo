import * as React from "react";
import { Typography } from '@material-ui/core';
import { MuiTypographyItem } from 'components/MuiTypography';
import { MuiInputContainer } from 'components/MuiInputs';
export const MuiTypographyVariantsGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Variants
      </Typography>
      <MuiInputContainer>
        <MuiTypographyItem variant="h1"/>
        <MuiTypographyItem variant="h2"/>
        <MuiTypographyItem variant="h3"/>
        <MuiTypographyItem variant="h4"/>
        <MuiTypographyItem variant="h5"/>
        <MuiTypographyItem variant="h6"/>
        <MuiTypographyItem variant="subtitle1"/>
        <MuiTypographyItem variant="subtitle2"/>
        <MuiTypographyItem variant="body1"/>
        <MuiTypographyItem variant="body2"/>
        <MuiTypographyItem variant="button"/>
        <MuiTypographyItem variant="caption"/>
        <MuiTypographyItem variant="overline"/>
      </MuiInputContainer>
    </>
  );
}
