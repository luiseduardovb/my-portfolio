import React from "react";

//Assets
import ReactIcon from "../../assets/react-icon.png";
import ReactNativeIcon from "../../assets/react-native-icon.png";
import ReduxIcon from "../../assets/redux-icon.png";
import PythonIcon from "../../assets/python-icon.png";
import DjangoIcon from "../../assets/django-icon.png";
import JsIcon from "../../assets/js-icon.png";
import GitIcon from "../../assets/git-icon.png";
import NodeIcon from "../../assets/node-icon.png";
import HtmlIcon from "../../assets/html-icon.png";
import CssIcon from "../../assets/css-icon.png";
import MaterialUiIcon from "../../assets/material-ui-icon.png";

// Components
import SkillsIcon from "./SkillsIcon";

// Material UI
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { t } = useTranslation(["common", "skills"]);

  return (
    <Box bgcolor={theme.palette.common.black} padding={10} alignItems="center">
      <Typography
        variant="h3"
        align="center"
        color="secondary"
        style={{ paddingBottom: "50px" }}
      >
        {t("common:skills")}
      </Typography>
      <Hidden smUp>
        <Typography
          variant="h6"
          align={smDown ? "center" : "left"}
          color="primary"
        >
          {t("skills:basics")}
        </Typography>
      </Hidden>
      <Box
        paddingY={3}
        display="flex"
        flexDirection={smDown ? "column" : "row"}
        alignItems={smDown ? "center" : "flex-start"}
        justifyContent={smDown ? "flex-start" : "center"}
      >
        <SkillsIcon src={GitIcon} alt="git" />
        <SkillsIcon src={ReduxIcon} alt="redux" />
        <SkillsIcon src={CssIcon} alt="css" />
        <SkillsIcon src={HtmlIcon} alt="html" />
        <SkillsIcon src={JsIcon} alt="javascript" />
        <SkillsIcon src={PythonIcon} alt="python" />
      </Box>
      <Hidden smUp>
        <Typography
          variant="h6"
          align={smDown ? "center" : "left"}
          color="primary"
        >
          {t("skills:frontEnd")}
        </Typography>
      </Hidden>
      <Box
        paddingY={5}
        display="flex"
        flexDirection={smDown ? "column" : "row"}
        alignItems={smDown ? "center" : "flex-start"}
        justifyContent={smDown ? "flex-start" : "center"}
      >
        <SkillsIcon src={ReactIcon} alt="react" />
        <SkillsIcon src={ReactNativeIcon} alt="react-native" />
        <SkillsIcon src={MaterialUiIcon} alt="material-ui" />
      </Box>
      <Hidden smUp>
        <Typography
          variant="h6"
          align={smDown ? "center" : "left"}
          color="primary"
        >
          {t("skills:backEnd")}
        </Typography>
      </Hidden>
      <Box
        paddingY={5}
        display="flex"
        flexDirection={smDown ? "column" : "row"}
        alignItems={smDown ? "center" : "flex-start"}
        justifyContent={smDown ? "flex-start" : "center"}
      >
        <SkillsIcon src={NodeIcon} alt="node" />
        <SkillsIcon src={DjangoIcon} alt="django" />
      </Box>
    </Box>
  );
};

export default Skills;
