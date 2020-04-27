import * as React from "react";
import { Typography, Divider } from '@material-ui/core';
import { MuiButtonsGuide, MuiCheckboxGuide, MuiRadioGuide, MuiSelectGuide } from 'components/MuiInputs';

export const MuiInputsGuide = () => {
  return (
    <>
      <Typography variant="h4">
      Inputs
      </Typography>
      <Divider/>
      <MuiButtonsGuide/>
      <MuiCheckboxGuide/>
      <MuiRadioGuide/>
      <MuiSelectGuide/>
    </>
  );
}
