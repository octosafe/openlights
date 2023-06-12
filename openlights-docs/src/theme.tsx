import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#9376E0",
      },
      secondary: {
        main: "#E893CF",
      },
    },
    typography: {
        fontFamily: ["Nunito Sans", "Open Sans", "sans-serif"].join(","),
    }
  })
);
// #9376E0
// #E893CF
// #F3BCC8
// #F6FFA6