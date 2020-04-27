import * as React from "react";
import { Typography, FormControl, Select, MenuItem, InputLabel, FormHelperText, makeStyles, Theme, createStyles } from '@material-ui/core';
import { MuiInputContainer } from './MuiInputContainer';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);
export const MuiSelectGuide = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };
  const classes = useStyles();
  const getMenuItems = (keyPrefix: string) => [
    <MenuItem key={keyPrefix+0} value="">
      <em>None</em>
    </MenuItem>,
    <MenuItem key={keyPrefix+1} value={10}>Ten</MenuItem>,
    <MenuItem key={keyPrefix+2} value={20}>Twenty</MenuItem>,
    <MenuItem key={keyPrefix+3} value={30}>Thirty</MenuItem>,
  ]
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Select
      </Typography>
      <MuiInputContainer>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-label">simple</InputLabel>
        <Select
          labelId="simple-label"
          value={value}
          onChange={handleChange}
        >
          {getMenuItems("simple-label")}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-helper-label">simple-helper</InputLabel>
        <Select
          labelId="simple-helper-label"
          value={value}
          onChange={handleChange}
        >
          {getMenuItems("simple-helper-label")}
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select value={value} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          {getMenuItems("empy-helper")}
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="simple-placeholder-label">
          placeholder
        </InputLabel>
        <Select
          labelId="simple-placeholder-label"
          value={value}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          {getMenuItems("simple-placeholder-label")}
        </Select>
        <FormHelperText>Label + placeholder</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} disabled>
        <InputLabel id="simple-disabled-label">disabled</InputLabel>
        <Select
          labelId="simple-disabled-label"
          value={value}
          onChange={handleChange}
        >
          {getMenuItems("simple-disabled-label")}
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} error>
        <InputLabel id="simple-error-label">error</InputLabel>
        <Select
          labelId="simple-error-label"
          value={value}
          onChange={handleChange}
          renderValue={value => `⚠️  - ${value}`}
        >
          {getMenuItems("simple-error-label")}
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-readonly-label">readonly</InputLabel>
        <Select
          labelId="simple-readonly-label"
          value={value}
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          {getMenuItems("simple-readonly-label")}
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-autowidth-label">autowidth</InputLabel>
        <Select
          labelId="simple-autowidth-label"
          value={value}
          onChange={handleChange}
          autoWidth
        >
          {getMenuItems("simple-autowidth-label")}
        </Select>
        <FormHelperText>Auto width</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select value={value} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="" disabled>
            Placeholder
          </MenuItem>
          {getMenuItems("placeholder-empty")}
        </Select>
        <FormHelperText>Placeholder</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel id="simple-required-label">required</InputLabel>
        <Select
          labelId="simple-required-label"
          value={value}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          {getMenuItems("simple-required-label")}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="simple-outlined-label">outlined</InputLabel>
        <Select
          labelId="simple-outlined-label"
          value={value}
          onChange={handleChange}
          label="outlined"
        >
          {getMenuItems("simple-outlined-label")}
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="simple-filled-label">filled</InputLabel>
        <Select
          labelId="simple-filled-label"
          value={value}
          onChange={handleChange}
        >
          {getMenuItems("simple-filled-label")}
        </Select>
      </FormControl>
      </MuiInputContainer>
    </>
  );
}
