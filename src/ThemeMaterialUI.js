import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    common: {
      blue: "#458FF6",
      grey: "#1F1534",
      black: "#000000",
    },
    primary: {
      main: "#458FF6",
    },
  },
  typography: {
    tab: {
      fontFamily: "Mulish",
      fontSize: "16px",
      color: "#1F1534",
      fontWeight: 300,
    },
    h2: {
      fontFamily: "Mulish",
      fontWeight: 700,
      fontSize: "48px",
    },
    subtitle1: {
      fontFamily: "Mulish",
      fontWeight: 300,
      fontSize: "21px",
      color: "#7D7987",
    },
  },
});
