import * as React from "react";
import { Typography } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';

export interface MuiTypographyItemProps {
  variant: Variant;
}

export const MuiTypographyItem = (props: MuiTypographyItemProps) => {
  const {variant} = props;
  return (
    <>
      <Typography variant={variant} >
        {variant}. Responive
      </Typography>
    </>
  );
}
