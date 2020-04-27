import * as React from "react";
import { Typography, SnackbarContent, Button } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
import { Alert } from '@material-ui/lab';
export const MuiSnackBarGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Snackbars
      </Typography>
      <MuiInputContainer>
        <SnackbarContent
          message="Simple snackbar with action"
          action={<Button color="secondary" size="small">action</Button>}
        />
        <Alert severity="error">Standard error message!</Alert>
        <Alert severity="warning">Standard warning message!</Alert>
        <Alert severity="info">Standard information message!</Alert>
        <Alert severity="success">Standard success message!</Alert>
        <Alert variant="filled" severity="error">Filled error message!</Alert>
        <Alert variant="filled" severity="warning">Filled warning message!</Alert>
        <Alert variant="filled" severity="info">Filled information message!</Alert>
        <Alert variant="filled" severity="success">Filled success message!</Alert>
        <Alert variant="outlined" severity="error">Outlined error message!</Alert>
        <Alert variant="outlined" severity="warning">Outlined warning message!</Alert>
        <Alert variant="outlined" severity="info">Outlined information message!</Alert>
        <Alert variant="outlined" severity="success">Outlined success message!</Alert>
      </MuiInputContainer>
    </>
  );
}
