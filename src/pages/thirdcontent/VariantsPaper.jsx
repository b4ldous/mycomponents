import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const VariantsPaper = () => {
  return (
    <>
      <Typography sx={{ fontWeight: 1000 }} variant="h3">
        Variant Paper
      </Typography>
      <br></br>
      <br></br>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "25px",
          border: "solid 1px",
          borderColor: "#edf1f5",
          borderRadius: "10px",
          background: "#edf1f5",
        }}
      >
        <Box
          sx={{
            justifyContent: "space-around",
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper variant="outlined" />
          <Paper variant="outlined" square />
        </Box>
      </Box>
    </>
  );
};

export default VariantsPaper;
