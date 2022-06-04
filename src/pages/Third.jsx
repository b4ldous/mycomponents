import React from "react";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Container from "@mui/material/Container";
import SimplePaper from "./thirdcontent/SimplePaper";
import VariantsPaper from "./thirdcontent/VariantsPaper";
import ElevationPaper from "./thirdcontent/ElevationPaper";
import CssBaseline from "@mui/material/CssBaseline";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Third = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <CssBaseline />
          <Container>
            <Typography sx={{ fontWeight: 1000 }} variant="h2">
              Paper
            </Typography>{" "}
            <br></br>
            <br></br>
            <SimplePaper />
            <br></br>
            <br></br>
            <VariantsPaper />
            <br></br>
            <br></br>
            <ElevationPaper />
          </Container>
        </>
      </ThemeProvider>
    </>
  );
};

export default Third;
