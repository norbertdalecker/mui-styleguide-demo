import * as React from "react";
import { Typography, Divider } from '@material-ui/core';
import { MuiProgressGuide, MuiDialogGuide, MuiSnackBarGuide } from 'components/MuiFeedback';

export const MuiFeedbackGuide = () => {
  return (
    <>
      <Typography id="Feedback" variant="h4">
      Feedback
      </Typography>
      <Divider/>
      <MuiProgressGuide/>
      <MuiDialogGuide/>
      <MuiSnackBarGuide/>
    </>
  );
}
