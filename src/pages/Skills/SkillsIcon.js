import React from "react";

//Material UI
import { Box, useMediaQuery } from "@material-ui/core";

const SkillsIcon = ({ src, alt }) => {
  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box clone paddingY={5} paddingX={2}>
      <img
        style={{
          width: smDown ? "70%" : "15%",
        }}
        src={src}
        alt={alt}
      />
    </Box>
  );
};

export default SkillsIcon;
