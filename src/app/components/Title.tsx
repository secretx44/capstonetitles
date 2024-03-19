import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const theme = createTheme();

theme.typography.h2 = {
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
      <Typography variant="h2"
        sx={{
          backgroundImage: "linear-gradient(to right, #121212, #e21a1a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >Capstone Title Generator</Typography>
    </ThemeProvider>
  );
}
