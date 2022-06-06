import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const FirstExample = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Typography sx={{ fontWeight: 1000 }} variant="h3">
        The classic click counter
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
        <Box sx={{ maxWidth: 500, margin: "auto" }}>
          <Paper sx={{ padding: "20px" }} elevation={24}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h3">You clicked</Typography>

              <Typography variant="h2" sx={{ fontWeight: 1000 }}>
                {count}{" "}
              </Typography>
              <Typography variant="h3">times</Typography>
              <br></br>

              <Button
                sx={{
                    borderRadius: '25px',
                  height: "50px",
                  width: "150px",
                  color: "white",
                  background:
                    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(38,240,11,1) 0%, rgba(0,212,255,1) 100%)",
                }}
                onClick={() => setCount(count + 1)}
              >
                <Typography variant="button">Click</Typography>
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default FirstExample;
