import React from "react";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Container from "@mui/material/Container";
import BasicCard from "./fourthcontent/BasicCard";
import OutlinedCard from "./fourthcontent/OutlinedCard";
import ComplexInteraction from "./fourthcontent/ComplexInteraction";
import MediaCard from "./fourthcontent/MediaCard";

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
          <BasicCard />
          <br></br>
          <br></br>
          <OutlinedCard />
          <br></br>
          <br></br>
          <ComplexInteraction />
          <br></br>
          <br></br>
          <MediaCard />
          <br></br>
          <br></br>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Fourth;
