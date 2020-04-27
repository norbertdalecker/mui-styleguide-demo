import * as React from "react";
import { Typography, Chip, PropTypes, Avatar } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
export const MuiChipGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Chip
      </Typography>
      <MuiInputContainer>
      {['small', 'medium'].map((size: 'small' | 'small')=>{
        return ['default', 'outlined'].map((variant: 'default' | 'outlined')=>{
          return ['primary', 'secondary', 'default'].map((color: PropTypes.Color)=>{
            return (
              <Chip
                key={`${size}-${color}-${variant}`}
                avatar={<Avatar>F</Avatar>}
                color={color}
                variant={variant}
                size={size}
                onDelete={()=>{}}
                label={`${color} ${variant} ${size}`}/>
            )
          })
        })
       })
      }
      </MuiInputContainer>
    </>
  );
}
