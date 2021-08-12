import React from "react";

import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  useScrollTrigger,
  makeStyles,
  Typography,
} from "@material-ui/core";
import HeaderTabs from "./HeaderTabs";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    boxShadow: "none",
    height: "80px",
  },
  toolbar: {
    marginLeft: "auto",
  },
  toolbarMargin: {
    // ...theme.mixins.toolbar,
    marginBottom: "1em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.5em",
    },
  },
  typography: {
    fontWeight: "bolder",
    fontSize: "27px",
    padding: 0,
    margin: 0,
  },
}));

function ElevationScroll({ children, window }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <ElevationScroll>
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar>
            <Box display="flex" flexDirection="column">
              <Typography color="secondary" className={classes.typography}>
                Luis V
              </Typography>
              <Typography className={classes.typography}>portfolio</Typography>
            </Box>
            <Box className={classes.toolbar}>
              <HeaderTabs />
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <div className={classes.toolbarMargin} />
    </div>
  );
};

export default NavBar;
