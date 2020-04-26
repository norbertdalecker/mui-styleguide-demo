import * as React from "react";
import { Paper } from '@material-ui/core';
import { MuiPaletteGuide } from 'components/MuiPalette';
import { MuiTypographyGuide } from 'components/MuiTypography';

export const MuiStyleGuide = () => {
  return (
    <Paper>
      <MuiPaletteGuide/>
      <MuiTypographyGuide/>
    </Paper>
  );
}
