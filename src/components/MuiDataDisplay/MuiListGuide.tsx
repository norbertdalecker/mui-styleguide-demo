import * as React from "react";
import { Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Collapse, ListItemAvatar, Avatar } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
import { Inbox, Drafts, StarBorder, ExpandLess, ExpandMore, Image, Work, BeachAccess } from '@material-ui/icons';
export const MuiListGuide = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Typography variant="h5" gutterBottom>
      List
      </Typography>
      <MuiInputContainer>
        <Typography gutterBottom>
        Simple list
        </Typography>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Item" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Item" />
          </ListItem>
        </List>
        <Typography gutterBottom>
        Netsed list
        </Typography>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Item" />
          </ListItem>

        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem selected button>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Selected" />
            </ListItem>
          </List>
        </Collapse>
        </List>
        <Typography gutterBottom>
        Foldered list
        </Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Image />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Work />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccess />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
      </MuiInputContainer>
    </>
  );
}
