import * as React from "react";
import { Typography, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
export const MuiDialogGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Dialogs
      </Typography>
      <MuiInputContainer>
      <DialogTitle id="customized-dialog-title">
        Modal title
      </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary">
            Disagree
          </Button>
          <Button color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </MuiInputContainer>
    </>
  );
}
