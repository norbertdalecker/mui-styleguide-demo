import * as React from "react";
import { Typography, Grid } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { MuiPaletteItem } from 'components/MuiPalette';

const useStyles = makeStyles((theme) => ({
  group: {
    marginTop: theme.spacing(3),
  },
}));
export const MuiBackgroundsGuide = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Typography variant="h5" className={classes.group}>
      Backgrounds
      </Typography>
      <Typography gutterBottom className={classes.group}>
      Default
      </Typography>
      <Grid container spacing={2}>
        <MuiPaletteItem color={theme.palette.background.default} name="palette.background.default"/>
        <MuiPaletteItem color={theme.palette.background.paper} name="palette.background.paper"/>
      </Grid>
      <Typography gutterBottom className={classes.group}>
      Divider
      </Typography>
      <Grid container spacing={2}>
        <MuiPaletteItem color={theme.palette.divider} name="palette.divider"/>
      </Grid>
      <Typography gutterBottom className={classes.group}>
      Buttons
      </Typography>
      <Grid container spacing={2}>
        <MuiPaletteItem color={theme.palette.action.active} name="palette.action.active"/>
        <MuiPaletteItem color={theme.palette.action.disabled} name="palette.action.disabled"/>
        <MuiPaletteItem color={theme.palette.action.disabledBackground} name="palette.action.disabledBackground"/>
        <MuiPaletteItem color={theme.palette.action.focus} name="palette.action.focus"/>
        <MuiPaletteItem color={theme.palette.action.hover} name="palette.action.hover"/>
        <MuiPaletteItem color={theme.palette.action.selected} name="palette.action.selected"/>
      </Grid>
    </>
  );
}
