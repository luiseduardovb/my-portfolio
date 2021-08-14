import React from "react";

//Material UI
import { Avatar, Box, Grid, Typography } from "@material-ui/core";

const ContactAvatar = ({ title, info, icon, href }) => {
  return (
    <Box
      clone
      display="flex"
      flexDirection="row"
      alignItems="center"
      justify="center"
      paddingY={2}
    >
      <Grid item md={12} sm={12} xs={12}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justify="center"
        >
          <Grid
            container
            alignItems="center"
            justifyContent="flex-start"
            style={{ width: "200px", textDecoration: "none" }}
            component="a"
            href={href}
          >
            <Grid item md={4} sm={4} xs={4}>
              <Avatar>{icon}</Avatar>
            </Grid>
            <Grid item md={8} sm={8} xs={8}>
              <Grid
                container
                direction="column"
                alignItems="flex-start"
                justify="center"
              >
                <Typography color="primary" variant="h6">
                  {title}
                </Typography>
                <Typography
                  color="primary"
                  variant="h6"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {info}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default ContactAvatar;
