import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import emailjs from "emailjs-com";
import { Email, Phone } from "@material-ui/icons";
import React from "react";
import ContactAvatar from "../../components/ContactAvatar";
import CustomTextfield from "../../components/CustomTextfield";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "50px",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const levBlack = theme.palette.common.black;

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
    <form onSubmit={handleSubmit}>
      <Box bgcolor={levBlack} minHeight="100vh" padding={10}>
        <Typography variant="h4" color="secondary" className={classes.title}>
          Contact Me
        </Typography>

        <Grid container>
          <Grid item md={6} sm={12}>
            <Typography
              variant="h5"
              color="secondary"
              className={classes.title}
            >
              Im here to answer any questions or inquiries. Reach out to me and
              I will respond as soon as I can.
            </Typography>

            <Grid container spacing={2}>
              <Grid item md={6} sm={12} xs={12}>
                <CustomTextfield
                  name="name"
                  label="Name"
                  type="text"
                  placeholder="Enter Name"
                  fullWidth
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <CustomTextfield
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Enter Email"
                  fullWidth
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <CustomTextfield
                  name="message"
                  label="Message"
                  placeholder="Type your message"
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
                    Send Message
                  </Button>
                  {/* <input type="submit">Send</input> */}
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box style={{ marginTop: "50px" }}>
              <ContactAvatar
                title="Whats App"
                info="+504 99502141"
                icon={<Phone />}
              />
              <ContactAvatar
                title="Email"
                info="levb92@gmail.com"
                icon={<Email />}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default Contact;
