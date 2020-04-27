import * as React from "react";
import { Typography, Slider } from '@material-ui/core';
import { MuiInputContainer } from './MuiInputContainer';
export const MuiSliderGuide = () => {
  const marks = [
    {
      value: 0,
      label: 'Zero',
    },
    {
      value: 37,
      label: '37',
    },
    {
      value: 100,
      label: '!!',
    },
  ];
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Sliders
      </Typography>
      <MuiInputContainer>
        <Typography id="discrete-slider" gutterBottom>
          Primary
        </Typography>
        <Slider
          defaultValue={30}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
        <Typography id="discrete-slider" gutterBottom>
          Secondary
        </Typography>
        <Slider
          color="secondary"
          defaultValue={30}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
        <Typography id="discrete-slider" gutterBottom>
          Disabled
        </Typography>
        <Slider
          defaultValue={30}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
          disabled
        />
        <Typography id="discrete-slider-custom" gutterBottom>
           Custom marks
         </Typography>
         <Slider
           defaultValue={20}
           aria-labelledby="discrete-slider-custom"
           step={10}
           valueLabelDisplay="auto"
           marks={marks}
         />
         <Typography id="discrete-slider-restrict" gutterBottom>
           Restricted values
         </Typography>
         <Slider
           defaultValue={20}
           aria-labelledby="discrete-slider-restrict"
           step={null}
           valueLabelDisplay="auto"
           marks={marks}
         />
      </MuiInputContainer>
    </>
  );
}
