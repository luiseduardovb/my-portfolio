import { createTheme } from "@material-ui/core/styles";

const levLightBlue = "#46A2D5";
const levWhite = "#ffffff";
const levBlack = "#1E1E20";

export const lightTheme = createTheme({
  type: "LITEMODE",
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

export const darkTheme = createTheme({
  type: "DARKMODE",
  palette: {
    common: {
      lightBlue: levLightBlue,
      white: levWhite,
      black: levBlack,
    },
    primary: {
      main: "#FF10F0",
    },
    secondary: {
      main: "#222024",
    },
  },
});
