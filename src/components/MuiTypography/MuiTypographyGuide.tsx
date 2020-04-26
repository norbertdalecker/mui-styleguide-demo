import * as React from "react";
import { Typography, Divider } from '@material-ui/core';
import { MuiTypographyVariantsGuide,
        MuiTypographyStylesGuide,
        MuiTypographyFontsGuide } from 'components/MuiTypography';

export const MuiTypographyGuide = () => {
  return (
    <>
      <Typography variant="h4">
      Typography
      </Typography>
      <Divider/>
      <MuiTypographyVariantsGuide/>
      <br/>
      <MuiTypographyStylesGuide/>
      <br/>
      <MuiTypographyFontsGuide/>
    </>
  );
}
