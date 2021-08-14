import React, { useState } from "react";
import { Link } from "react-scroll";

// MaterialUI
import {
  Box,
  IconButton,
  SwipeableDrawer,
  ListItem,
  ListItemText,
  List,
  Typography,
  FormControlLabel,
  Switch,
  Button,
} from "@material-ui/core";
import { Brightness2, Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

// Translations
import { useTranslation } from "react-i18next";

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
  },
  listTypography: {
    color: theme.palette.common.black,
  },
  root: {
    "&$selected": {
      backgroundColor: "transparent",
      color: "blue",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },

  selected: {},
  translationButton: {
    fontWeight: "bolder",
    "&:hover": {
      backgroundColor: "transparent",
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

const DrawerMenu = ({
  openDrawer,
  setOpenDrawer,
  isEnglish,
  isDark,
  handleThemeChange,
}) => {
  const [value, setValue] = useState("");
  const classes = useStyles();
  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const { t, i18n } = useTranslation("common");

  const options = [
    {
      id: 1,
      name: t("common:home"),
      to: "home",
    },
    {
      id: 2,
      name: t("common:skills"),
      to: "skills",
    },
    {
      id: 3,
      name: t("common:projects"),
      to: "projects",
    },
    {
      id: 4,
      name: t("common:contact"),
      to: "contact",
    },
  ];

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
          {options.map((option) => (
            <ListItem
              key={option.id}
              selected={value === option.id}
              component={Link}
              to={option.to}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              classes={{
                root: classes.root,
                selected: classes.selected,
              }}
              onClick={() => {
                setOpenDrawer(false);
                setValue(option.id);
              }}
              button
            >
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="h6"
                    className={classes.listTypography}
                    style={{
                      fontWeight: value === option.id ? "bolder" : "normal",
                    }}
                  >
                    {option.name}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <Box display="flex">
        <Box flexGrow={1}>
          <Button
            size="large"
            variant="text"
            color="secondary"
            disableFocusRipple
            disableTouchRipple
            className={classes.translationButton}
            onClick={() => i18n.changeLanguage(isEnglish ? "es" : "en")}
          >
            {isEnglish ? "ES" : "EN"}
          </Button>

          <FormControlLabel
            control={<Switch checked={isDark} onChange={handleThemeChange} />}
            label={<Brightness2 className={classes.switchIcon} />}
          />
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
