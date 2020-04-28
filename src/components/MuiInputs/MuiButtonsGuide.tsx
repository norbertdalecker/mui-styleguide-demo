import * as React from "react";
import { Typography, ButtonGroup, Fab, PropTypes, Orientation } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { MuiInputContainer } from './MuiInputContainer';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);
export const MuiButtonsGuide = () => {
  const classes = useStyles();
  const generateButtons = (variant: 'text' | 'outlined' | 'contained') => {
    return (
      <MuiInputContainer>
        <Button variant={variant}>Default</Button>
        <Button variant={variant} color="primary">
          Primary
        </Button>
        <Button variant={variant} color="secondary">
          Secondary
        </Button>
        <Button variant={variant} disabled>
          Disabled
        </Button>
        <Button variant={variant} color="primary" href="#contained-buttons">
          Link
        </Button>
      </MuiInputContainer>
    );
  }
  const generateSizeButtons = (variant: 'text' | 'outlined' | 'contained') => {
    return (
      <div>
        <Button variant={variant} size="small" className={classes.margin}>
          Small
        </Button>
        <Button variant={variant} size="medium" className={classes.margin}>
          Medium
        </Button>
        <Button variant={variant} size="large" className={classes.margin}>
          Large
        </Button>
      </div>
    );
  }
  const generateButtonGroup = (
          size: 'small' | 'medium' | 'large', color: PropTypes.Color,
          variant: 'text' | 'outlined' | 'contained', orientation: Orientation = "horizontal") => {
    return (
      <ButtonGroup orientation={orientation} size={size} variant={variant} color={color} aria-label={`${variant} ${color} button group`}>
        <Button>{size}</Button>
        <Button>{variant}</Button>
        <Button>{color}</Button>
      </ButtonGroup>
    )
  }
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Contained Buttons
      </Typography>
      {generateButtons('contained')}
      <Typography variant="h5" gutterBottom>
      Text Buttons
      </Typography>
      {generateButtons('text')}
      <Typography variant="h5" gutterBottom>
      Outlined Buttons
      </Typography>
      {generateButtons('outlined')}
      <Typography variant="h5" gutterBottom>
      Button Sizes
      </Typography>
      <MuiInputContainer>
        <div>
          {generateSizeButtons('text')}
          {generateSizeButtons('outlined')}
          {generateSizeButtons('contained')}
          <div>
            <IconButton aria-label="delete" className={classes.margin} size="small">
              <ArrowDownwardIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" className={classes.margin}>
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="delete" className={classes.margin}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" className={classes.margin}>
              <DeleteIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </MuiInputContainer>
      <Typography variant="h5" gutterBottom>
      Basic Button groups
      </Typography>
      <MuiInputContainer>
        {generateButtonGroup('small','primary', 'outlined')}
        {generateButtonGroup('small','default', 'contained')}
        {generateButtonGroup('small','secondary', 'text')}
        {generateButtonGroup('medium','secondary', 'outlined')}
        {generateButtonGroup('medium','default', 'contained')}
        {generateButtonGroup('medium','primary', 'text')}
        {generateButtonGroup('large','default', 'outlined')}
        {generateButtonGroup('large','secondary', 'contained')}
        {generateButtonGroup('large','primary', 'text')}
      </MuiInputContainer>
      <Typography variant="h5" gutterBottom>
      Button Orientations
      </Typography>
      <MuiInputContainer>
        {generateButtonGroup('medium','primary', 'outlined', 'vertical')}
        {generateButtonGroup('medium','primary', 'contained', 'vertical')}
        {generateButtonGroup('medium','primary', 'text', 'vertical')}
      </MuiInputContainer>
      <Typography variant="h5" gutterBottom>
      Floating Buttons
      </Typography>
      <MuiInputContainer>
        <div>
          <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
            <AddIcon />
          </Fab>
          <Fab size="medium" color="secondary" aria-label="add" className={classes.margin}>
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="add" className={classes.margin}>
            <AddIcon />
          </Fab>
        </div>
        <div>
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="add"
            className={classes.margin}
          >
            <NavigationIcon className={classes.extendedIcon} />
            Extended
          </Fab>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            className={classes.margin}
          >
            <NavigationIcon className={classes.extendedIcon} />
            Extended
          </Fab>
          <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
            <NavigationIcon className={classes.extendedIcon} />
            Extended
          </Fab>
        </div>
      </MuiInputContainer>
    </>
  );
}
