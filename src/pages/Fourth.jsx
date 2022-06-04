import React from "react";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Container from "@mui/material/Container";
import BasicCard from "./fourthcontent/BasicCard";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Fourth() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Typography sx={{ fontWeight: 1000 }} variant="h2">
            Card
          </Typography>
          <br></br>
          <br></br>
          <BasicCard/>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Fourth;
