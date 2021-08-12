import { createTheme } from "@material-ui/core/styles";

const levLightBlue = "#46A2D5";
const levWhite = "#ffffff";

const theme = createTheme({
  palette: {
    common: {
      lightBlue: levLightBlue,
      white: levWhite,
    },
    primary: {
      main: levLightBlue,
    },
    secondary: {
      main: levWhite,
    },
  },
});

export default theme;
