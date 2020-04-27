import * as React from "react";
import { Typography, Divider } from '@material-ui/core';
import { MuiButtonsGuide, MuiCheckboxGuide, MuiRadioGuide, MuiSelectGuide, MuiSliderGuide, MuiSwitchGuide, MuiTextFieldGuide } from 'components/MuiInputs';

export const MuiInputsGuide = () => {
  return (
    <>
      <Typography id="Inputs" variant="h4">
      Inputs
      </Typography>
      <Divider/>
      <MuiButtonsGuide/>
      <MuiCheckboxGuide/>
      <MuiRadioGuide/>
      <MuiSelectGuide/>
      <MuiSliderGuide/>
      <MuiSwitchGuide/>
      <MuiTextFieldGuide/>
    </>
  );
}
