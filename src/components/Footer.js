import React from "react";
import clsx from "clsx";

// Assets
import GitHubLogo from "../assets/github.png";
// Material UI
import {
  Avatar,
  Box,
  Hidden,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Email, Phone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  icon: {
    color: theme.palette.common.black,
  },
  callToAction: {
    backgroundColor: "transparent",
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

        <Hidden smUp>
          <Avatar
            component="a"
            href="tel:+50499502141"
            className={clsx(classes.avatar, classes.callToAction)}
          >
            <Phone className={classes.icon} />
          </Avatar>
          <Avatar
            component="a"
            href="mailto:levb92@gmail.com"
            target="_blank"
            className={clsx(classes.avatar, classes.callToAction)}
          >
            <Email className={classes.icon} />
          </Avatar>
        </Hidden>

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
