import React from "react";

// MaterialUI
import {
  Box,
  IconButton,
  SwipeableDrawer,
  ListItem,
  ListItemText,
  List,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  drawerIconContainer: {
    marginLeft: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "30px",
    width: "30px",
  },
  drawer: {
    ...theme.typography.tab,
    backgroundColor: theme.palette.common.lightBlue,
    width: "150px",
  },
  drawerItem: {
    ...theme.typography.tab,

    color: "#ffffff",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerItemRoot: {
    "&:hover": {
      backgroundColor: theme.palette.common.green,
      color: "#fffff",
      opacity: 1,
    },
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
      color: theme.palette.common.green,
      backgroundColor: "transparent",
      "&:hover": {
        opacity: 1,
        backgroundColor: "transparent",
      },
    },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1.25em",
    },
  },
}));

const DrawerMenu = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles();
  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!isIos}
        disableDiscovery={isIos}
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />

        <List disablePadding>
          <ListItem
            classes={{
              root: classes.drawerItemRoot,
              selected: classes.drawerItemSelected,
            }}
            onClick={() => {
              setOpenDrawer(false);
              //   setMenuIdx(-1);
            }}
            button
            // component={Link}
            to="/"
            // selected={menuIdx === -1}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Home
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <Box display="flex">
        <Box flexGrow={1}>
          <IconButton
            className={classes.drawerIconContainer}
            onClick={() => setOpenDrawer(!openDrawer)}
            disableRipple
          >
            <Menu color="secondary" className={classes.drawerIcon} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default DrawerMenu;
