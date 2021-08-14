import React, { useState } from "react";

import {
  Button,
  Tabs,
  Tab,
  makeStyles,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { Link } from "react-scroll";

// Translation
import { useTranslation } from "react-i18next";
import { Brightness2 } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  tab: {
    maxWidth: "10px",
    padding: 0,
    fontWeight: "bolder",
  },
  translationButton: {
    fontWeight: "bolder",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  switchIcon: {
    fill: theme.type === "DARKMODE" ? "yellow" : "white",
  },
}));

const HeaderTabs = ({ handleThemeChange, isDark, isEnglish }) => {
  const { t, i18n } = useTranslation("common");

  const classes = useStyles();
  const [value, setValue] = useState(1);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="simple tabs example"
      indicatorColor="none"
    >
      <Tab
        label={t("common:skills")}
        value="1"
        disableFocusRipple
        disableTouchRipple
        className={classes.tab}
        component={Link}
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        duration={500}
      />
      <Tab
        label={t("common:projects")}
        value="2"
        disableFocusRipple
        disableTouchRipple
        className={classes.tab}
        component={Link}
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
      />
      <Tab
        label={t("common:contact")}
        value="3"
        disableFocusRipple
        disableTouchRipple
        className={classes.tab}
        component={Link}
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
      />

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
    </Tabs>
  );
};

export default HeaderTabs;
