import React from "react";
import { Element } from "react-scroll";

// Components
import ContactAvatar from "../../components/ContactAvatar";
import CustomTextfield from "../../components/CustomTextfield";

//Material UI

import {
  Box,
  Button,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import emailjs from "emailjs-com";
import { Email, Phone } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: "50px",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const levBlack = theme.palette.common.black;
  const { t } = useTranslation(["common", "contact"]);

  const smDown = theme.breakpoints.down("sm");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `gmail`,
        `portfolio_template`,
        e.target,
        `user_KHKL5RaJc3JEyt44mlxDJ`
      )
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
          e.target.reset();
        },
        (error) => {
          console.log(
            "🚀 ~ file: index.js ~ line 41 ~ handleSubmit ~ error",
            error
          );
          alert("An error occurred, Please try again", error.text);
        }
      );
  };
  return (
    <Element name="contact">
      <Box bgcolor={levBlack} padding={smDown ? 5 : 10}>
        {" "}
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" color="secondary" className={classes.title}>
            {t("common:contact")}
          </Typography>

          <Grid container>
            <Grid item md={6} sm={12}>
              {/* <Typography
                variant="h4"
                color="secondary"
                className={classes.title}
              >
                {t("common:contact")}
              </Typography> */}
              <Typography
                variant="h5"
                color="secondary"
                className={classes.title}
              >
                {t("contact:contactme")}
              </Typography>

              <Grid container spacing={2}>
                <Grid item md={6} sm={12} xs={12}>
                  <CustomTextfield
                    name="name"
                    label={t("contact:name")}
                    type="text"
                    placeholder={t("contact:namePlaceholder")}
                    fullWidth
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <CustomTextfield
                    name="email"
                    label={t("contact:email")}
                    placeholder={t("contact:emailPlaceholder")}
                    type="email"
                    fullWidth
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <CustomTextfield
                    name="message"
                    label={t("contact:message")}
                    placeholder={t("contact:messagePlaceholder")}
                    fullWidth
                    multiline
                    rows={10}
                  />
                </Grid>
                <Box
                  clone
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-end"
                >
                  <Grid item md={12} xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ color: "white" }}
                      type="submit"
                    >
                      {t("contact:send")}
                    </Button>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Hidden smDown>
              <Grid item md={6} sm={12} xs={12}>
                <Box style={{ marginTop: "50px" }}>
                  <ContactAvatar
                    title="WhatsApp"
                    info="+50499502141"
                    icon={<Phone />}
                    href="tel:+50499502141"
                  />
                  <ContactAvatar
                    title="Email"
                    info="levb92@gmail.com"
                    icon={<Email />}
                    href="mailto:levb92@gmail.com"
                  />
                </Box>
              </Grid>
            </Hidden>
          </Grid>
        </form>
      </Box>
    </Element>
  );
};

export default Contact;
