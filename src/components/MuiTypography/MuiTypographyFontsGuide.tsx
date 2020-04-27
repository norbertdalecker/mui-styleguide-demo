import * as React from "react";
import { Typography, Box } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';

export const MuiTypographyFontsGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Fonts
      </Typography>
      <MuiInputContainer>
        <Typography variant="h6">
          <Box fontWeight="fontWeightLight" m={1}>
            Light
          </Box>
          <Box fontWeight="fontWeightRegular" m={1}>
            Regular
          </Box>
          <Box fontWeight="fontWeightMedium" m={1}>
            Medium
          </Box>
          <Box fontWeight={500} m={1}>
            500
          </Box>
          <Box fontWeight="fontWeightBold" m={1}>
            Bold
          </Box>
          <Box fontFamily="fontFamily" m={1}>
            Default
          </Box>
          <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
            Monospace
          </Box>
        </Typography>
      </MuiInputContainer>
    </>);
}
