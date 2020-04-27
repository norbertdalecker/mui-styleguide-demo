import * as React from "react";
import { TextField, MenuItem, InputAdornment } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

export interface MuiTextFieldVariantProps{
  variant: "standard" | "filled" | "outlined";
}

export const MuiTextFieldVariant = (props: MuiTextFieldVariantProps ) => {
  const {variant} = props;
  return (
    <div>
      <TextField required id={`${variant}-required`} label="Required" defaultValue={`${variant} Required`} variant={variant}/>
      <TextField disabled id={`${variant}-disabled`} label="Disabled" defaultValue={`${variant} Disabled`} variant={variant}/>
      <TextField
        id={`${variant}d-password-input`}
        label={`${variant} Password`}
        type="password"
        autoComplete="current-password"
        variant={variant}
      />
      <TextField
        id={`${variant}-read-only-input`}
        label="Read Only"
        defaultValue={`${variant} Read only`}
        InputProps={{
          readOnly: true,
        }}
        variant={variant}
      />
      <TextField
        id={`${variant}-number`}
        label={`${variant} number`}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant={variant}
      />
      <TextField id={`${variant}-search`} label={`${variant} search`} type="search" variant={variant} />
      <TextField
        id={`${variant}-helperText`}
        label="Helper text"
        defaultValue={`${variant} with helper`}
        helperText="Some important text"
        variant={variant}
      />
      <TextField
        error
        id={`${variant}-error`}
        label={`${variant} Error`}
        defaultValue={`${variant} Error`}
        variant={variant}/>
      <TextField
        error
        id={`${variant}-error-helper-text`}
        label={`${variant} Error`}
        defaultValue={`${variant} Error`}
        helperText="Incorrect entry."
        variant={variant}
      />
      <TextField
        id={`${variant}-secondary`}
        label={`${variant}-secondary`}
        variant={variant}
        color="secondary"
      />
      <TextField
          id={`${variant}-select`}
          select
          label="Select"
          value={0}
          helperText="Please select"
          variant={variant}
        >
          {['€', '$'].map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <br/>
        <TextField
          id={`${variant}-with-icon-textfield`}
          label={`${variant} with start icon`}
          variant={variant}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id={`${variant}-with-icon-textfield`}
          label={`${variant} with end icon`}
          variant={variant}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label={`${variant}-small`}
          id={`${variant}-small`}
          size="small"
          variant={variant}
          defaultValue={`${variant} small`}
          helperText="Some important text"
        />
        <br/>
        <TextField
          id={`${variant}-full-width`}
          label="Label"
          style={{ margin: 8, width: '100%' }}
          placeholder={`${variant} full-width`}
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant={variant}
        />
        <br/>
        <TextField
          label="None"
          id={`${variant}-margin-none`}
          defaultValue={`${variant} nomargin`}
          helperText="Some important text"
          variant={variant}
        />
        <TextField
          label="Dense"
          id={`${variant}-margin-dense`}
          defaultValue={`${variant} dense`}
          helperText="Some important text"
          margin="dense"
          variant={variant}
        />
        <TextField
          label="Normal"
          id={`${variant}margin-normal`}
          defaultValue={`${variant} normal`}
          helperText="Some important text"
          margin="normal"
          variant={variant}
        />
    </div>
  );
}
