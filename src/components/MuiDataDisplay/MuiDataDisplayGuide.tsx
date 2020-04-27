import * as React from "react";
import { Typography, Divider } from '@material-ui/core';
import { MuiAvatarGuide, MuiBadgeGuide, MuiChipGuide,
         MuiListGuide, MuiTableGuide, MuiTooltipGuide } from 'components/MuiDataDisplay';

export const MuiDataDisplayGuide = () => {
  return (
    <>
      <Typography id="DataDisplay" variant="h4">
      Data Display
      </Typography>
      <Divider/>
      <MuiAvatarGuide/>
      <MuiBadgeGuide/>
      <MuiChipGuide/>
      <MuiListGuide/>
      <MuiTableGuide/>
      <MuiTooltipGuide/>
    </>
  );
}
