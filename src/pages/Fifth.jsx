import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Thesxprop from "./fifthcontent/Thesxprop";

const Fifth = () => {
  return (
    <>
      <Box>
        <Container>
          <Typography sx={{ fontWeight: 1000 }} variant="h2">
            Box
          </Typography>
          <br></br>
          <br></br>
          <Thesxprop />
          <br></br>
          <br></br>
        </Container>
      </Box>
    </>
  );
};

export default Fifth;
