import * as React from "react";
import { Typography, SnackbarContent, Button } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
import { Alert, Color } from '@material-ui/lab';

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
        {['standard', 'filled', 'outlined'].map((variant: 'standard' | 'filled' | 'outlined') => {
          return ["error", "warning", "info", "success"].map((severity: Color) => {
            return (<Alert
                      key={variant+severity}
                      severity={severity}
                      variant={variant}>
                        {variant} {severity} message!
                    </Alert>);
          })
        })}
      </MuiInputContainer>
    </>
  );
}
