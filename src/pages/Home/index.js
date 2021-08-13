import React from "react";

import Silouhette from "../../assets/lev-side.png";

//Material UI
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

// Translation
import { useTranslation } from "react-i18next";

const Home = () => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { t } = useTranslation("common");

  return (
    <div
      style={{
        backgroundColor: theme.palette.common.lightBlue,
        minHeight: "100vh",
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Grid item md={6} sm={12}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <img style={{ width: "60%" }} src={Silouhette} alt="silhouette" />
          </Box>
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography
            align="center"
            variant={smDown ? "h4" : "h3"}
            color="secondary"
          >
            Hey There, Im Luis Velasquez, I Develop Software
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
