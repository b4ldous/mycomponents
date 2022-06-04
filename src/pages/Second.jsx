import React from "react";

import Typography from "@mui/material/Typography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Container from '@mui/material/Container'
import BasicAccordion from "./secondcontent/BasicAccordion";
import { ControlledAccordion } from "./secondcontent/ControlledAccordion";
import CustomizedAccordions from "./secondcontent/CustomizedAccordions";
import CssBaseline  from "@mui/material/CssBaseline";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Second = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container>
        <Typography sx={{ fontWeight: 1000 }} variant="h2">
          Accordion
        </Typography> <br></br><br></br>
        <BasicAccordion/> <br></br><br></br>
        <ControlledAccordion/><br></br><br></br>
        <CustomizedAccordions/>


        </Container>




      </ThemeProvider>
    </>
  );
};

export default Second;
