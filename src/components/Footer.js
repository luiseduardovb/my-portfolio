import React from "react";

// Assets
import GitHubLogo from "../assets/github.png";
// Material UI
import {
  Avatar,
  Box,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const primary = theme.palette.common.lightBlue;
  const black = theme.palette.common.black;
  return (
    <footer>
      <Box
        display="flex"
        alignItems="center"
        bgcolor={primary}
        paddingY={2}
        paddingX={4}
      >
        <Box flexGrow={1}>
          <Typography style={{ color: black, fontWeight: "bold" }}>
            © 2021 Luis Velasquez{" "}
          </Typography>
        </Box>

        <Avatar
          src={GitHubLogo}
          component="a"
          href="https://github.com/luiseduardovb"
          target="_blank"
          className={classes.avatar}
        />
      </Box>
    </footer>
  );
};

export default Footer;
