import * as React from "react";
import { Typography, Card, CardContent, CardActions, Button, CardHeader, Avatar, IconButton } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
import { MoreVert } from '@material-ui/icons';
export const MuiCardGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Card
      </Typography>
      <MuiInputContainer>
        <Card>
          <CardHeader
            avatar={<Avatar aria-label="recipe">R</Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Simple Card title"
            subheader="With Simple Subheader"
          />
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Simple card content
            </Typography>
            <Typography variant="body2" component="p">
              With body2 text
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card variant="outlined">
          <CardHeader
            avatar={<Avatar> R </Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Outlined Card title"
            subheader="With Simple Subheader"
          />
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Outlined card content
            </Typography>
            <Typography variant="body2" component="p">
              With body2 text
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </MuiInputContainer>
    </>
  );
}
