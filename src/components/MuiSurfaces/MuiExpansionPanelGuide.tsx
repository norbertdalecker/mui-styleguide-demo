import * as React from "react";
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
import { ExpandMore } from '@material-ui/icons';
export const MuiExpansionPanelGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      ExpansionPanel
      </Typography>
      <MuiInputContainer>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMore />} >
            <Typography>Expansion Panel 1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Some text
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel disabled>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
          >
            <Typography>Disabled Expansion Panel</Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </MuiInputContainer>
    </>
  );
}
