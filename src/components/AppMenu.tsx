import * as React from "react";
import { Drawer, ListItem, ListItemText, List, makeStyles, Theme, createStyles } from '@material-ui/core';

const drawerWidth = 200;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      position: 'sticky',
      height: '100vh',
      top: '64px',
      [theme.breakpoints.down('sm')]:{
        width: 0,
        visibility: 'collapse'
      }
    },
    drawerPaper: {
      width: drawerWidth,
      top: '64px',
      [theme.breakpoints.down('sm')]:{
        width: 0,
        visibility: 'collapse'
      }
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);
export const AppMenu = () => {
  const classes = useStyles();
  const handleClick = (target: string) => {
    const anchor = (document).querySelector(target);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
      <Drawer
        className={classes.drawer}
        elevation={24}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <List>
            {['Palette', 'Typography', 'Inputs',
            'Feedback', 'Surface', 'Navigation', 'DataDisplay'].map((text, index) => (
              <ListItem button key={text+index} onClick={(_ => {handleClick(`#${text}`)})}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
  );
}
