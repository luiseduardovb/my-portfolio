import React from "react";
import { Element } from "react-scroll";

//Assets
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

  const { t } = useTranslation("home");

  return (
    <Element name="home">
      <Box
        display="flex"
        flexDirection={smDown ? "column" : "row"}
        alignItems="center"
        justifyContent={smDown ? "center" : "flex-start"}
        style={{
          backgroundColor: theme.palette.common.lightBlue,
          minHeight: "100vh",
          padding: smDown ? 50 : 200,
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item md={6} sm={12}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <img style={{ width: "80%" }} src={Silouhette} alt="silhouette" />
            </Box>
          </Grid>
          <Box clone paddingY={smDown && 10}>
            <Grid item md={6} sm={12}>
              <Typography
                align="center"
                variant="h3"
                color="secondary"
                style={{ fontWeight: "bold" }}
              >
                {t("home:greeting")}
              </Typography>
              <Typography
                align="center"
                variant="h4"
                color="secondary"
                style={{ fontWeight: "bold" }}
              >
                {t("home:greetingMessage")}
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Element>
  );
};

export default Home;
