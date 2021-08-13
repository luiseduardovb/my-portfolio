import { useTheme } from "@material-ui/core";
import React from "react";

const AboutMe = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.common.black,
        minHeight: "100vh",
      }}
    ></div>
  );
};

export default AboutMe;
