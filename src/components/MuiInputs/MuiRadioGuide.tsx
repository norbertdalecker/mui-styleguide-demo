import * as React from "react";
import { Typography, FormControlLabel, Radio, RadioGroup, FormControl } from '@material-ui/core';
import { MuiInputContainer } from './MuiInputContainer';
export const MuiRadioGuide = () => {
  const [value, setValue] = React.useState('opt4');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Radio buttons
      </Typography>
      <MuiInputContainer>
        <FormControl component="fieldset">
          <RadioGroup name="demo" value={value} onChange={handleChange}>
            <FormControlLabel value="opt1" control={<Radio color="primary" />} label="Primary" />
            <FormControlLabel value="opt2" control={<Radio color="secondary" />} label="Secondary" />
            <FormControlLabel value="opt3" control={<Radio size="small" color="default" />} label="Small, default" />
            <FormControlLabel value="opt4" disabled control={<Radio />} label="(Disabled option)" />
          </RadioGroup>
        </FormControl>
        <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio color="primary" />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Radio color="primary" />}
          label="End"
          labelPlacement="end"
        />
      </MuiInputContainer>
    </>
  );
}
