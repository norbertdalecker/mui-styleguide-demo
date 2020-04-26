import * as React from "react";
import { Typography, Grid } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

export interface MuiTypographyItemProps {
  variant: Variant;
  name: string;
}

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
export const MuiTypographyItem = (props: MuiTypographyItemProps) => {
  const {variant, name} = props;
  return (
    <>
    <Grid item xs={12} sm={12} md={6}>
        <Typography variant={variant} >
          {name}
        </Typography>
    </Grid>
    <ThemeProvider theme={theme}>
    <Grid item xs={12} sm={12} md={6}>
        <Typography variant={variant} >
          {variant}. Responive
        </Typography>
    </Grid>
    </ThemeProvider>
    </>
  );
}
