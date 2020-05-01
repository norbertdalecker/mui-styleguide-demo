import * as React from "react";
import { Typography, Paper, Theme, makeStyles, createStyles } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexBasis: '100%',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }),
);
export const MuiPaperGuide = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Paper
      </Typography>
      <MuiInputContainer>
        <div className={classes.root}>
        <Paper elevation={0} >Elevation 0</Paper>
        <Paper > Default</Paper>
        <Paper elevation={3} > Elevation 3</Paper>
        <Paper elevation={24} > Elevation 24</Paper>
        <Paper variant="outlined" >Outlined</Paper>
        <Paper variant="outlined" square >Otlined Square</Paper>
        </div>
      </MuiInputContainer>
    </>
  );
}
