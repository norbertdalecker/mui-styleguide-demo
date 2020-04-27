import * as React from "react";
import { Typography, Divider } from '@material-ui/core';
import { MuiColorsGuide, MuiBackgroundsGuide } from 'components/MuiPalette';

export const MuiPaletteGuide = () => {
  return (
    <>
      <Typography id="Palette" variant="h4">
      Palette
      </Typography>
      <Divider/>
      <MuiColorsGuide/>
      <MuiBackgroundsGuide/>
    </>
  );
}
