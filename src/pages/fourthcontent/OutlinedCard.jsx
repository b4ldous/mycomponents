import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

const OutlinedCard = () => {
  return (
    <>
      <Typography sx={{ fontWeight: 1000 }} variant="h3">
        Oulined Card
      </Typography>
      <br></br>
      <br></br>

      <Box
        sx={{
          padding: "25px",
          border: "solid 1px",
          borderColor: "#edf1f5",
          borderRadius: "10px",
          background: "#edf1f5",
        }}
      >
        <Box sx={{ minWidth: 275 }}>
          <Card sx={{ minWidth: 275, width: 300, margin: 'auto' }} variant="outlined">{card}</Card>
        </Box>
      </Box>
    </>
  );
};

export default OutlinedCard;
