import * as React from "react";
import { Paper } from '@material-ui/core';
import { MuiPaletteGuide } from 'components/MuiPalette';
import { MuiTypographyGuide } from 'components/MuiTypography';
import { MuiInputsGuide } from 'components/MuiInputs';
import { MuiFeedbackGuide } from './MuiFeedback';

export const MuiStyleGuide = () => {
  return (
    <Paper>
      <MuiPaletteGuide/>
      <MuiTypographyGuide/>
      <MuiInputsGuide/>
      <MuiFeedbackGuide/>
    </Paper>
  );
}
