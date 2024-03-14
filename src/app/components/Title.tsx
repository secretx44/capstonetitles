import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const theme = createTheme();

theme.typography.h2 = {
  color: "#121212",
  fontFamily: "Roboto",
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "4rem",
  },
};

export default function Title() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h2">Capstone Title Generator</Typography>
    </ThemeProvider>
  );
}
