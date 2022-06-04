import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import BasicAppBar from "./firstcontent/BasicAppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const First = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box>
          <Container>
            <Typography sx={{ fontWeight: 1000 }} variant="h2">
              App bar
            </Typography>
            <br></br>
            <br></br>
            <BasicAppBar />
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default First;
