import * as React from "react";
import { Container } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ReactNode } from 'react';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, 0.12)',
      padding: theme.spacing(3),
      marginBottom: theme.spacing(3),
      textAlign: 'center',
      lineBreak: 'normal',
      wordBreak: 'break-all',
      '& > *': {
        margin: theme.spacing(1),
        flexWrap: 'wrap',
        height: 'auto',
      },
    }
  }),
);
export interface MuiInputContainerProps {
  children: ReactNode[] | ReactNode;
}
export const MuiInputContainer = (props: MuiInputContainerProps) => {
  const classes = useStyles();
  const {children} = props;
  return (
      <Container maxWidth="md" className={classes.root}>
      {children}
      </Container>
  );
}
