import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import BasicStack from './seventhcontent/BasicStack';
import DirectionStack from './seventhcontent/DirectionStack';

const Seventh = () => {
  return (
    <>
     <Box>
          <Container>
            <Typography sx={{ fontWeight: 1000 }} variant="h2">
              Stack
            </Typography>
            <br></br>
            <br></br>
            <BasicStack/><br></br><br></br>
            <DirectionStack/>
            
          </Container>
        </Box>
    
    
    </>
  )
}

export default Seventh