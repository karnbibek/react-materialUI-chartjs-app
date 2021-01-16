import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Card, CardContent } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const DrawerPage = () => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(true);
  }

  const clickHandler = (props) => {
    console.log(props);
  }

  return (
    <div>

      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="menu" edge="start" onClick={handleDrawer}>
            <Menu />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Material-UI
              </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant='temporary' anchor="left" open={open} onClose={() => setOpen(false)}>
        <Card>
          <CardContent>
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text} onClick={() => clickHandler(text)}>
                  {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Drawer>
    </div>
  );
}

export default DrawerPage;