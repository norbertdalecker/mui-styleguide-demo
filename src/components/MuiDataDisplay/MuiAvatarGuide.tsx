import * as React from "react";
import { Typography, Avatar, Box, makeStyles, Theme, createStyles } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
import { AvatarGroup } from '@material-ui/lab';
import { Assignment } from '@material-ui/icons';
import clsx from 'clsx';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    warning: {
      color: theme.palette.warning.contrastText,
      backgroundColor: theme.palette.warning.main,
    },
    info:{
      color: theme.palette.info.contrastText,
      backgroundColor: theme.palette.info.main,
    },
    success:{
      color: theme.palette.success.contrastText,
      backgroundColor: theme.palette.success.main,
    },
    error:{
      color: theme.palette.error.contrastText,
      backgroundColor: theme.palette.error.main,
    }
  }),
);
export const MuiAvatarGuide = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Avatar
      </Typography>
      <MuiInputContainer>
        <Typography component="div" gutterBottom>
        Variants
        <Box className={classes.root}>
        {['circle' , 'rounded' , 'square'].map((variant: 'circle' | 'rounded' | 'square')=> {
          return (
            <Typography component="div" key={variant} gutterBottom>
            {variant}
              <Avatar className={clsx(classes.large, classes.info)} variant={variant}>
                N
              </Avatar>
            </Typography>)
        })}
        </Box>
        </Typography>
        <Typography component="div" gutterBottom>
        AvatarGroup
        <AvatarGroup max={4}>
          <Avatar className={clsx(classes.large, classes.info)} alt="Pic1">
            <Assignment />
          </Avatar>
          <Avatar className={clsx(classes.large, classes.success)} alt="Pic2">
            <Assignment />
          </Avatar>
          <Avatar className={clsx(classes.large, classes.warning)} alt="Pic3">
            <Assignment />
          </Avatar>
          <Avatar className={clsx(classes.large, classes.error)} alt="Pic4">
            <Assignment />
          </Avatar>
        </AvatarGroup>
        </Typography>
      </MuiInputContainer>
    </>
  );
}
