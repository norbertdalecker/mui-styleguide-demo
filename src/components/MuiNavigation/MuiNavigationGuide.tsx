import * as React from "react";
import { Typography, Divider } from '@material-ui/core';
import { MuiBreadcrumbsGuide, MuiLinkGuide,
          MuiStepperGuide, MuiTabsGuide } from 'components/MuiNavigation';

export const MuiNavigationGuide = () => {
  return (
    <>
      <Typography id="Navigation" variant="h4">
      Navigation
      </Typography>
      <Divider/>
      <MuiBreadcrumbsGuide/>
      <MuiLinkGuide/>
      <MuiStepperGuide/>
      <MuiTabsGuide/>
    </>
  );
}
