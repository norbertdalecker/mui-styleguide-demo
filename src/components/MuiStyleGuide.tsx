import * as React from "react";
import { Paper, Container } from '@material-ui/core';
import { MuiPaletteGuide } from 'components/MuiPalette';
import { MuiTypographyGuide } from 'components/MuiTypography';
import { MuiInputsGuide } from 'components/MuiInputs';
import { MuiFeedbackGuide } from 'components/MuiFeedback';
import { MuiSurfacesGuide } from 'components/MuiSurfaces';
import { MuiDataDisplayGuide } from 'components/MuiDataDisplay';
import { MuiNavigationGuide } from 'components/MuiNavigation';

export const MuiStyleGuide = () => {
  return (
    <Container>
      <Paper style={{padding: '24px 16px 24px 16px'}}>
        <MuiPaletteGuide/>
        <MuiTypographyGuide/>
        <MuiInputsGuide/>
        <MuiFeedbackGuide/>
        <MuiSurfacesGuide/>
        <MuiNavigationGuide/>
        <MuiDataDisplayGuide/>
      </Paper>
    </Container>
  );
}
