import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TopicIcon from "@mui/icons-material/Topic";
import DevicesIcon from "@mui/icons-material/Devices";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { makeStyles } from "@mui/styles";
import { height, padding } from "@mui/system";

const drawerWidth = 300;

const useStyles = makeStyles({
  page: {
    background: "red",
    width: "100%"
  },
  drawer: {
    width: drawerWidth,
    top: '168px',
    height: 'calc(100% - 168px)',
    // paddingTop: '168px'
  },
  drawerpaper:{
    width: drawerWidth,
    top: '36'
  },
  root:{
    display:'flex',
  }
});

// const theme = cre ateTheme();

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer className={classes.drawer} variant="permanent" anchor="left" classes = {{ paper: classes.drawerpaper}}>
        <List>
          {["My Docs", "Shared Devices", "Favorites"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 3 === 0 ? (
                  <TopicIcon />
                ) : index % 3 === 1 ? (
                  <DevicesIcon />
                ) : (
                  <FavoriteIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
