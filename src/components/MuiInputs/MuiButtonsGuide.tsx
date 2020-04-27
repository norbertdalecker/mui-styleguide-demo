import * as React from "react";
import { Typography, ButtonGroup, Divider, Fab } from '@material-ui/core';
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
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Contained Buttons
      </Typography>
      <MuiInputContainer>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </MuiInputContainer>
      <Typography variant="h5" gutterBottom>
      Text Buttons
      </Typography>
      <MuiInputContainer>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons" color="primary">
          Link
        </Button>
      </MuiInputContainer>
      <Typography variant="h5" gutterBottom>
      Outlined Buttons
      </Typography>
      <MuiInputContainer>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Link
        </Button>
      </MuiInputContainer>
      <Typography variant="h5" gutterBottom>
      Button Sizes
      </Typography>
      <MuiInputContainer>
        <div>
          <div>
            <Button size="small" className={classes.margin}>
              Small
            </Button>
            <Button size="medium" className={classes.margin}>
              Medium
            </Button>
            <Button size="large" className={classes.margin}>
              Large
            </Button>
          </div>
          <div>
            <Button variant="outlined" size="small" color="primary" className={classes.margin}>
              Small
            </Button>
            <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
              Medium
            </Button>
            <Button variant="outlined" size="large" color="primary" className={classes.margin}>
              Large
            </Button>
          </div>
          <div>
            <Button variant="contained" size="small" color="primary" className={classes.margin}>
              Small
            </Button>
            <Button variant="contained" size="medium" color="primary" className={classes.margin}>
              Medium
            </Button>
            <Button variant="contained" size="large" color="primary" className={classes.margin}>
              Large
            </Button>
          </div>
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
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>outlined</Button>
          <Button>primary</Button>
          <Button>button</Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>contained</Button>
          <Button>primary</Button>
          <Button>button</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          <Button>text</Button>
          <Button>primary</Button>
          <Button>button</Button>
        </ButtonGroup>
        <Divider/>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button>small</Button>
          <Button>outlined</Button>
          <Button>primary</Button>
        </ButtonGroup>
        <ButtonGroup color="secondary" aria-label="outlined secondary button group">
          <Button>normal</Button>
          <Button>outlined</Button>
          <Button>secondary</Button>
        </ButtonGroup>
        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
          <Button>large</Button>
          <Button>outlined</Button>
          <Button>primary</Button>
        </ButtonGroup>
      </MuiInputContainer>
      <Typography variant="h5" gutterBottom>
      Button Orientations
      </Typography>
      <MuiInputContainer>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button>vertical</Button>
          <Button>outlined</Button>
          <Button>primary</Button>
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="contained"
        >
          <Button>vertical</Button>
          <Button>contained</Button>
          <Button>primary</Button>
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical text primary button group"
          variant="text"
        >
          <Button>vertical</Button>
          <Button>contained</Button>
          <Button>text</Button>
        </ButtonGroup>
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
