import React from "react";

//Material UI
import { Box, useMediaQuery } from "@material-ui/core";

const SkillsIcon = ({ src, alt }) => {
  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box clone paddingY={smDown ? 2 : 0} paddingX={smDown ? 0 : 2}>
      <img
        style={{
          width: smDown ? "70%" : "12%",
        }}
        src={src}
        alt={alt}
      />
    </Box>
  );
};

export default SkillsIcon;
