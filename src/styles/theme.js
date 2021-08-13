import { createTheme } from "@material-ui/core/styles";

const levLightBlue = "#46A2D5";
const levWhite = "#ffffff";
const levBlack = "#1E1E20";

const theme = createTheme({
  palette: {
    common: {
      lightBlue: levLightBlue,
      white: levWhite,
      black: levBlack,
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
