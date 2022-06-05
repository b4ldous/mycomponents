import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BasicGridd from "./sixthcontent/BasicGridd";
import GridMultipleBreakPoints from "./sixthcontent/GridMultipleBreakPoints";

const Sixth = () => {
  return (
    <>
      <Box>
        <Container>
          <Typography sx={{ fontWeight: 1000 }} variant="h2">
            Grid
          </Typography> <br></br>
          <Typography variant="body">
            The Material Design responsive layout grid adapts to screen size and
            orientation, ensuring consistency across layouts.
          </Typography>
          <Typography variant="body">
            The grid creates visual consistency between layouts while allowing
            flexibility across a wide variety of designs. Material Design's
            responsive UI is based on a 12-column grid layout.
          </Typography>
          <br></br>
          <br></br>
          <BasicGridd />
          <br></br>
          <br></br>
          <GridMultipleBreakPoints />
        </Container>
      </Box>
    </>
  );
};

export default Sixth;
