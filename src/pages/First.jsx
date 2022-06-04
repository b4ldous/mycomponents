import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import BasicAppBar from "./firstcontent/BasicAppBar";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const First = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Container>
        <Typography sx={{ fontWeight: 1000 }} variant="h2">
          App bar
        </Typography><br></br><br></br>
        <BasicAppBar/>
       
      </Container>
      </ThemeProvider>
    </>
  );
};

export default First;
