import * as React from "react";
import { Typography, Stepper, Step, StepLabel, Orientation } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
function getSteps() {
  return ['Step1', 'Step2', 'Step3', 'Step4', 'Step5'];
}
export const MuiStepperGuide = () => {
  const steps = getSteps();
  const isStepOptional = (step: number) => {
  return step === 0;
  };

  const isStepSkipped = (step: number) => {
    return step === 1;
  };
  const isStepError = (step: number) => {
    return step === 2;
  };
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Steppers
      </Typography>
      <MuiInputContainer>
      {['horizontal', 'vertical'].map((variant: Orientation) => {
      return (
      <Stepper style={{flexWrap: 'wrap'}} key={variant} activeStep={4} orientation={variant}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode; error?: boolean } = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
            labelProps.optional = <Typography variant="caption">Skipped</Typography>;
          }
          if (isStepError(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Alert message
              </Typography>
            );
            labelProps.error = true;
          }
          return (
            <Step  key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      )})}
      </MuiInputContainer>
    </>
  );
}
