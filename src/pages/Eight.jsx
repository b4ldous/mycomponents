import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography"
import StandardImageList from './eightcontent/StandarImageList';

const Eight = () => {
  return (
    <>
    <Container>
            <Typography sx={{ fontWeight: 1000 }} variant="h2">
              Image list
            </Typography>
            <br></br>
            <br></br>
            <StandardImageList/>
            
            
          </Container>
    
    </>
  )
}

export default Eight