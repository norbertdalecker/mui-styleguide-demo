import * as React from "react";
import { Typography, AppBar, Tabs, Tab } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
export const MuiTabsGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Tabs
      </Typography>
      <MuiInputContainer>
        <AppBar position="static">
          <Tabs value={0}>
            <Tab label="Primary Active"/>
            <Tab label="Disabled" disabled/>
          </Tabs>
        </AppBar>
        <AppBar color="default" position="static">
          <Tabs
            indicatorColor="secondary"
            textColor="secondary"
            value={0}
          >
            <Tab label="Secondary Active"/>
            <Tab label="Disabled" disabled/>
          </Tabs>
        </AppBar>
        <AppBar position="static">
          <Tabs centered value={0}>
            <Tab label="Primary Centered"/>
            <Tab label="Primary Centered"/>
          </Tabs>
        </AppBar>
        <AppBar position="static">
          <Tabs variant="scrollable" scrollButtons="auto" value={0}>
            <Tab label="Primary Scrollable"/>
            <Tab label="Primary Scrollable"/>
            <Tab label="Primary Scrollable"/>
            <Tab label="Primary Scrollable"/>
            <Tab label="Primary Scrollable"/>
            <Tab label="Primary Scrollable"/>
          </Tabs>
        </AppBar>
      </MuiInputContainer>
    </>
  );
}
