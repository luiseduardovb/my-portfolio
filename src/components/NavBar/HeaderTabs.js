import React, { useState } from "react";
import { Button, Tabs, Tab, makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";

// Translation
import { useTranslation } from "react-i18next";

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
}));

const HeaderTabs = () => {
  const { t, i18n } = useTranslation("common");
  const isEnglish = i18n.language === "en";
  const classes = useStyles();
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
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
    </Tabs>
  );
};

export default HeaderTabs;
