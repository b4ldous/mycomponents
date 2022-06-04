import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const Thesxprop = () => {
  return (
    <>

      <Box>
        <Typography sx={{ fontWeight: 1000 }} variant="h3">
          The <code>sx</code> prop
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
          <Box
            sx={{
              margin: "auto",
              maxWidth: 300,
              height: 300,
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Thesxprop;
