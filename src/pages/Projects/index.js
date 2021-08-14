import React from "react";
import { Element } from "react-scroll";

// Assets

import HopeAnimalLogo from "../../assets/hope-animal.png";
import MonetizaoLogo from "../../assets/monetizao-logo.png";
import TalentoLogo from "../../assets/talento-logo.png";

// Components
import Project from "./Project";

// Material UI
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "Talento",
    logo: TalentoLogo,
    alt: "talento",
    website: "www.google.com",
  },
  {
    title: "Monetizao",
    logo: MonetizaoLogo,
    alt: "monetizao",
    website: "https://www.monetizao.io",
  },

  {
    title: "Hope Animal Clinic",
    logo: HopeAnimalLogo,
    alt: "hope-animal-clinic",
    website: "https://www.google.com",
  },
  {
    title: "Monetizao",
    logo: MonetizaoLogo,
    alt: "monetizao",
    website: "https://www.monetizao.io",
  },
  {
    title: "Hope Animal Clinic",
    logo: HopeAnimalLogo,
    alt: "hope-animal-clinic",
    website: "https://www.google.com",
  },
  {
    title: "Talento",
    logo: TalentoLogo,
    alt: "talento",
    website: "www.google.com",
  },
];

const Projects = () => {
  const theme = useTheme();
  const primary = theme.palette.common.lightBlue;
  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { t } = useTranslation("common");

  return (
    <Element name="projects">
      <Box bgcolor={primary} padding={smDown ? 5 : 10}>
        <Typography
          align="center"
          variant="h4"
          color="secondary"
          style={{ paddingBottom: "50px" }}
        >
          {t("common:projects")}
        </Typography>

        <Grid
          container
          direction={smDown ? "column" : "row"}
          justify={smDown ? "center" : "center"}
          alignItems="center"
          // spacing={2}
        >
          {projects.map((project) => (
            <Project {...project} />
          ))}
        </Grid>
      </Box>
    </Element>
  );
};

export default Projects;
