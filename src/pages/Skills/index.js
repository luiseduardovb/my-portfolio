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
import { Box, Typography, useTheme, useMediaQuery } from "@material-ui/core";

const AboutMe = () => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box
      style={{
        backgroundColor: theme.palette.common.black,
        minHeight: "100vh",
        padding: 100,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        color="secondary"
        style={{ paddingBottom: "50px" }}
      >
        Skills
      </Typography>
      <Typography
        variant="h4"
        align={smDown ? "center" : "left"}
        color="primary"
      >
        Basics
      </Typography>
      <Box
        paddingY={5}
        display="flex"
        flexDirection={smDown ? "column" : "row"}
        alignItems={smDown ? "center" : "flex-start"}
        justifyContent={smDown ? "flex-start" : "flex-start"}
      >
        <SkillsIcon src={GitIcon} alt="git" />
        <SkillsIcon src={ReduxIcon} alt="redux" />
        <SkillsIcon src={CssIcon} alt="css" />
        <SkillsIcon src={HtmlIcon} alt="html" />
      </Box>
      <Typography
        variant="h4"
        align={smDown ? "center" : "left"}
        color="primary"
      >
        Front End
      </Typography>
      <Box
        paddingY={5}
        display="flex"
        flexDirection={smDown ? "column" : "row"}
        alignItems={smDown ? "center" : "flex-start"}
        justifyContent={smDown ? "flex-start" : "flex-start"}
      >
        <SkillsIcon src={JsIcon} alt="javascript" />
        <SkillsIcon src={NodeIcon} alt="node" />
        <SkillsIcon src={ReactIcon} alt="react" />
        <SkillsIcon src={ReactNativeIcon} alt="react-native" />
        <SkillsIcon src={MaterialUiIcon} alt="material-ui" />
      </Box>
      <Typography
        variant="h4"
        align={smDown ? "center" : "left"}
        color="primary"
      >
        Back End
      </Typography>
      <Box
        paddingY={5}
        display="flex"
        flexDirection={smDown ? "column" : "row"}
        alignItems={smDown ? "center" : "flex-start"}
        justifyContent={smDown ? "flex-start" : "flex-start"}
      >
        <SkillsIcon src={PythonIcon} alt="python" />
        <SkillsIcon src={DjangoIcon} alt="django" />
      </Box>
    </Box>
  );
};

export default AboutMe;
