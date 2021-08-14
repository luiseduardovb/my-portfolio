import React from "react";

// Material UI
import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    transition: "all .5s ease-in",
    backgroundColor: "white",
  },

  cardImage: {
    display: "block",
    width: "100%",
    // height: "240",
  },

  cardOverlay: {
    padding: 30,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    opacity: 0,
    visibility: "none",
    transition: ".5s ease",
    backgroundColor: "#393839",

    "&:hover": {
      opacity: "0.8",
    },
  },

  button: {
    padding: " .5rem",
    marginTop: "1rem",
    textDecoration: "none",
  },
}));

const Project = ({ title, logo, alt, website }) => {
  const classes = useStyles();
  const { t } = useTranslation("projects");

  return (
    <Grid item md={4} sm={12}>
      <Box className={classes.card}>
        <img src={logo} alt={alt} title={title} className={classes.cardImage} />
        <Box
          className={classes.cardOverlay}
          display="flex"
          flexDirection="row"
          alignItems="flex-end"
          justifyContent="center"
        >
          <Button
            component={"a"}
            color="primary"
            style={{ color: "white" }}
            variant="contained"
            className={classes.button}
            href={website}
            target="_blank"
          >
            {t("projects:visitSite")}
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Project;
