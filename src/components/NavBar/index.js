import React, { useState } from "react";
import { Link } from "react-scroll";

// Components
import HeaderTabs from "./HeaderTabs";
import DrawerMenu from "./DrawerMenu";

// Material UI
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  makeStyles,
  Typography,
} from "@material-ui/core";

// Translation
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    boxShadow: "none",
    height: "80px",
    width: "100%",
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
  link: {
    cursor: "pointer",
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

const NavBar = ({ appTheme, setAppTheme }) => {
  const classes = useStyles();
  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const { t, i18n } = useTranslation("common");
  const isEnglish = i18n.language === "en";

  const handleThemeChange = (event) => {
    const { checked } = event.target;
    if (checked) {
      setAppTheme("DARKMODE");
    } else {
      setAppTheme("LITEMODE");
    }
  };

  const isDark = Boolean(appTheme === "DARKMODE");

  return (
    <div>
      <CssBaseline />
      <ElevationScroll>
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar>
            <Box display="flex" flexDirection="column">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className={classes.link}
              >
                <Typography color="secondary" className={classes.typography}>
                  Luis V
                </Typography>
                <Typography className={classes.typography}>
                  {t("common:portfolio")}
                </Typography>
              </Link>
            </Box>
            <Box className={classes.toolbar}>
              {smDown ? (
                <DrawerMenu
                  openDrawer={openDrawer}
                  setOpenDrawer={setOpenDrawer}
                  handleThemeChange={handleThemeChange}
                  isDark={isDark}
                  isEnglish={isEnglish}
                />
              ) : (
                <HeaderTabs
                  handleThemeChange={handleThemeChange}
                  isDark={isDark}
                  isEnglish={isEnglish}
                />
              )}
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
