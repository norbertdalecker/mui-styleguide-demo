import * as React from "react";
import { Typography, Switch, FormControlLabel, FormGroup } from '@material-ui/core';
import { MuiInputContainer } from './MuiInputContainer';
export const MuiSwitchGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Switches
      </Typography>
      <MuiInputContainer>
        <FormControlLabel control={<Switch color="primary" />}label="Primary"/>
        <FormControlLabel control={<Switch name="checkedA" />} label="Secondary"/>
        <FormControlLabel control={<Switch />} label="Uncontrolled" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
        <FormControlLabel disabled control={<Switch checked />} label="Disabled" />
        <FormControlLabel
          control={<Switch size="small"/>}
          label="Small"
        />
        <FormGroup style={{justifyContent: 'center'}} aria-label="position" row>
          <FormControlLabel
            value="top"
            control={<Switch color="primary" />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Switch color="primary" />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Switch color="primary" />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="end"
            control={<Switch color="primary" />}
            label="End"
            labelPlacement="end"
          />
        </FormGroup>
      </MuiInputContainer>
    </>
  );
}
