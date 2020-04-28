import * as React from "react";
import { Typography, Grid } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { MuiPaletteItem } from 'components/MuiPalette';

const useStyles = makeStyles((theme) => ({
  group: {
    marginTop: theme.spacing(3),
  },
}));
export const MuiColorsGuide = () => {
  const classes = useStyles();
  const theme = useTheme();
  const generatePaletteItems = (variant: string) => {
    return (
      <Grid container spacing={2}>
        <MuiPaletteItem color={theme.palette[variant].light} name={`palette.${variant}.light`}/>
        <MuiPaletteItem color={theme.palette[variant].main} name={`palette.${variant}.main`}/>
        <MuiPaletteItem color={theme.palette[variant].dark} name={`palette.${variant}.dark`}/>
        <MuiPaletteItem color={theme.palette[variant].contrastText} name={`palette.${variant}.contrastText`}/>
      </Grid>
    );
  }
  return (
    <>
      <Typography variant="h5" className={classes.group}>
      Colors
      </Typography>
      <Typography gutterBottom className={classes.group}>
        Primary
      </Typography>
      {generatePaletteItems('primary')}
      <Typography gutterBottom className={classes.group}>
        Secondary
      </Typography>
      {generatePaletteItems('secondary')}
      <Typography gutterBottom className={classes.group}>
        Error
      </Typography>
      {generatePaletteItems('error')}
      <Typography gutterBottom className={classes.group}>
        Warning
      </Typography>
      {generatePaletteItems('warning')}
      <Typography gutterBottom className={classes.group}>
        Info
      </Typography>
      {generatePaletteItems('info')}
      <Typography gutterBottom className={classes.group}>
        Success
      </Typography>
      {generatePaletteItems('success')}
      <Typography gutterBottom className={classes.group}>
        Text
      </Typography>
      <Grid container spacing={2}>
        <MuiPaletteItem color={theme.palette.text.primary} name="palette.text.primary"/>
        <MuiPaletteItem color={theme.palette.text.secondary} name="palette.text.secondary"/>
        <MuiPaletteItem color={theme.palette.text.disabled} name="palette.text.disabled"/>
        <MuiPaletteItem color={theme.palette.text.hint} name="palette.text.hint"/>
      </Grid>
    </>
  );
}
