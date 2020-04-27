import * as React from "react";
import { Typography, CircularProgress, LinearProgress } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
export const MuiProgressGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Circular Progress
      </Typography>
      <MuiInputContainer>
        <CircularProgress />
        <CircularProgress color="secondary" />
        <CircularProgress variant="determinate" value={20} />
        <CircularProgress variant="determinate" value={65} color="secondary" />
      </MuiInputContainer>
      <Typography variant="h5" gutterBottom>
      Linear Progress
      </Typography>
      <MuiInputContainer>
        <Typography gutterBottom>
          Simple primary
        </Typography>
        <LinearProgress />
        <Typography gutterBottom>
          Simple secondary
        </Typography>
        <LinearProgress color="secondary" />
        <Typography gutterBottom>
          Determinate primary
        </Typography>
        <LinearProgress variant="determinate" value={20} />
        <Typography gutterBottom>
          Determinate secondary
        </Typography>
        <LinearProgress variant="determinate" value={50} color="secondary" />
        <Typography gutterBottom>
          Buffered primary
        </Typography>
        <LinearProgress variant="buffer" value={50} valueBuffer={40} />
        <Typography gutterBottom>
          Buffered secondary
        </Typography>
        <LinearProgress variant="buffer" value={60} valueBuffer={20} color="secondary" />
        <Typography gutterBottom>
          Query primary
        </Typography>
        <LinearProgress variant="query"/>
        <Typography gutterBottom>
          Query secondary
        </Typography>
        <LinearProgress variant="query" color="secondary" />
      </MuiInputContainer>
    </>
  );
}
