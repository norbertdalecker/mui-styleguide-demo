import * as React from "react";
import { Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
import { MuiInputContainer } from './MuiInputContainer';
import { MuiTextFieldVariant } from './MuiTextFieldVariant';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '30ch',
        [theme.breakpoints.down('sm')]:{
          width: 'auto'
        }
      },
    },
  }),
);
export const MuiTextFieldGuide = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" gutterBottom>
      TextFields
      </Typography>
      <MuiInputContainer>
        <form className={classes.root} noValidate autoComplete="off">
          <MuiTextFieldVariant variant="standard"/>
          <MuiTextFieldVariant variant="filled"/>
          <MuiTextFieldVariant variant="outlined"/>
        </form>
      </MuiInputContainer>
    </>
  );
}
