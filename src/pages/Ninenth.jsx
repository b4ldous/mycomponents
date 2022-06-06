import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FirstExample from "./ninethcontent/FirstExample";

const Ninenth = () => {
  return (
    <>
      <Box>
        <Container>
          <Typography sx={{ fontWeight: 1000 }} variant="h2">
            useState hook examples
          </Typography>
          <br></br>
          <br></br>
          <FirstExample/>
        </Container>
      </Box>
    </>
  );
};

export default Ninenth;
