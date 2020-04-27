import * as React from "react";
import { Typography, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import { MuiInputContainer } from './MuiInputContainer';
export const MuiCheckboxGuide = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Checkboxes
      </Typography>
      <MuiInputContainer>
        <FormControlLabel control={<Checkbox checked={checked} color="primary" onChange={handleChange}/>} label="Primary" />
        <FormControlLabel control={<Checkbox defaultChecked color="secondary"/>} label="Secondary"/>
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        <FormControlLabel control={<Checkbox checked disabled />} label="Disabled" />
        <FormControlLabel control={<Checkbox defaultChecked indeterminate />} label="Indeterminate"/>
        <FormControlLabel control={<Checkbox defaultChecked color="default" />} label="Default"/>
        <FormControlLabel control={<Checkbox defaultChecked size="small"/>} label="Small" />
        <FormGroup style={{justifyContent: 'center'}} aria-label="position" row>
          <FormControlLabel
            value="top"
            control={<Checkbox color="primary" />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Checkbox color="primary" />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Checkbox color="primary" />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="End"
            labelPlacement="end"
          />
        </FormGroup>
      </MuiInputContainer>
    </>
  );
}
