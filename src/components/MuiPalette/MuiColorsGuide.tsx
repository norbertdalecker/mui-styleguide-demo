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
  return (
    <>
      <Typography variant="h5" className={classes.group}>
      Colors
      </Typography>
      <Typography gutterBottom className={classes.group}>
        Primary
      </Typography>
      <Grid container spacing={2}>
        <MuiPaletteItem color={theme.palette.primary.light} name="palette.primary.light"/>
        <MuiPaletteItem color={theme.palette.primary.main} name="palette.primary.main"/>
        <MuiPaletteItem color={theme.palette.primary.dark} name="palette.primary.dark"/>
        <MuiPaletteItem color={theme.palette.primary.contrastText} name="palette.primary.contrastText"/>
      </Grid>
      <Typography gutterBottom className={classes.group}>
        Secondary
      </Typography>
      <Grid container spacing={2}>
        <MuiPaletteItem color={theme.palette.secondary.light} name="palette.secondary.light"/>
        <MuiPaletteItem color={theme.palette.secondary.main} name="palette.secondary.main"/>
        <MuiPaletteItem color={theme.palette.secondary.dark} name="palette.secondary.dark"/>
        <MuiPaletteItem color={theme.palette.secondary.contrastText} name="palette.secondary.contrastText"/>
      </Grid>
      <Typography gutterBottom className={classes.group}>
        Error
      </Typography>
      <Grid container spacing={2}>
        <MuiPaletteItem color={theme.palette.error.light} name="palette.error.light"/>
        <MuiPaletteItem color={theme.palette.error.main} name="palette.error.main"/>
        <MuiPaletteItem color={theme.palette.error.dark} name="palette.error.dark"/>
        <MuiPaletteItem color={theme.palette.error.contrastText} name="palette.error.contrastText"/>
      </Grid>
      <Typography gutterBottom className={classes.group}>
        Warning
      </Typography>
      <Grid container spacing={2}>
        <MuiPaletteItem color={theme.palette.warning.light} name="palette.warning.light"/>
        <MuiPaletteItem color={theme.palette.warning.main} name="palette.warning.main"/>
        <MuiPaletteItem color={theme.palette.warning.dark} name="palette.warning.dark"/>
        <MuiPaletteItem color={theme.palette.warning.contrastText} name="palette.warning.contrastText"/>
      </Grid>
      <Typography gutterBottom className={classes.group}>
        Info
      </Typography>
      <Grid container spacing={2}>
        <MuiPaletteItem color={theme.palette.info.light} name="palette.info.light"/>
        <MuiPaletteItem color={theme.palette.info.main} name="palette.info.main"/>
        <MuiPaletteItem color={theme.palette.info.dark} name="palette.info.dark"/>
        <MuiPaletteItem color={theme.palette.info.contrastText} name="palette.info.contrastText"/>
      </Grid>
      <Typography gutterBottom className={classes.group}>
        Success
      </Typography>
      <Grid container spacing={2}>
        <MuiPaletteItem color={theme.palette.success.light} name="palette.success.light"/>
        <MuiPaletteItem color={theme.palette.success.main} name="palette.success.main"/>
        <MuiPaletteItem color={theme.palette.success.dark} name="palette.success.dark"/>
        <MuiPaletteItem color={theme.palette.success.contrastText} name="palette.success.contrastText"/>
      </Grid>
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
