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
  const getMenuItems = () => [
    <MenuItem value="">
      <em>None</em>
    </MenuItem>,
    <MenuItem value={10}>Ten</MenuItem>,
    <MenuItem value={20}>Twenty</MenuItem>,
    <MenuItem value={30}>Thirty</MenuItem>,
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
          {getMenuItems()}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-helper-label">simple-helper</InputLabel>
        <Select
          labelId="simple-helper-label"
          value={value}
          onChange={handleChange}
        >
          {getMenuItems()}
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select value={value} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          {getMenuItems()}
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
          {getMenuItems()}
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
          {getMenuItems()}
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
          {getMenuItems()}
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
          {getMenuItems()}
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
          {getMenuItems()}
        </Select>
        <FormHelperText>Auto width</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select value={value} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="" disabled>
            Placeholder
          </MenuItem>
          {getMenuItems()}
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
          {getMenuItems()}
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
          {getMenuItems()}
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="simple-filled-label">filled</InputLabel>
        <Select
          labelId="simple-filled-label"
          value={value}
          onChange={handleChange}
        >
          {getMenuItems()}
        </Select>
      </FormControl>
      </MuiInputContainer>
    </>
  );
}
