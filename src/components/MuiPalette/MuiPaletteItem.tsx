import * as React from "react";
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  color: {
    display: 'flex',
    alignItems: 'center',
    '& div:first-of-type': {
      width: theme.spacing(12),
      height: theme.spacing(6),
      marginRight: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
    },
  },
}));
export interface MuiPaletteItemProps {
  color: string;
  name: string;
}
export const MuiPaletteItem = (props: MuiPaletteItemProps) => {
  const {color, name} = props;
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={3} className={classes.color}>
      <div style={{ borderStyle: 'solid', backgroundColor: color }} />
      <div>
        <Typography variant="body2">{name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {color}
        </Typography>
      </div>
    </Grid>
  );
}
