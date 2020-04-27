import * as React from "react";
import { Typography, Grid, Tooltip, Button } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
export const MuiTooltipGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Tooltip
      </Typography>
      <MuiInputContainer>
        <Grid container justify="center">
          <Grid item>
            <Tooltip open={true} title="Simple" placement="top-start">
              <Button>top-start</Button>
            </Tooltip>
            <Tooltip open={true} arrow title="Arrowed" placement="top">
              <Button>top</Button>
            </Tooltip>
            <Tooltip open={true} title="Simple" placement="top-end">
              <Button>top-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={2}>
            <Tooltip open={true} title="Simple" placement="left-start">
              <Button>left-start</Button>
            </Tooltip>
            <br />
            <Tooltip open={true} arrow title="Arrowed" placement="left">
              <Button>left</Button>
            </Tooltip>
            <br />
            <Tooltip open={true} title="Simple" placement="left-end">
              <Button>left-end</Button>
            </Tooltip>
          </Grid>
          <Grid item container xs={4} alignItems="flex-end" direction="column">
            <Grid item>
              <Tooltip open={true} title="Simple" placement="right-start">
                <Button>right-start</Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip open={true} arrow title="Arrowed" placement="right">
                <Button>right</Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip open={true} title="Simple" placement="right-end">
                <Button>right-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <Tooltip open={true} title="Simple" placement="bottom-start">
              <Button>bottom-start</Button>
            </Tooltip>
            <Tooltip open={true} arrow title="Arrowed" placement="bottom">
              <Button>bottom</Button>
            </Tooltip>
            <Tooltip open={true} title="Simple" placement="bottom-end">
              <Button>bottom-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </MuiInputContainer>
    </>
  );
}
