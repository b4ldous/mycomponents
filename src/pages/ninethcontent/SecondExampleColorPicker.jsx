import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const colorNames = [
  "Aquamarine",
  "BlueViolet",
  "Chartreuse",
  "CornflowerBlue",
  "Thistle",
  "SpringGreen",
  "SaddleBrown",
  "PapayaWhip",
  "MistyRose",
  "Tomato",
];

const SecondExampleColorPicker = () => {
  const [color, setColor] = useState("Tomato");

  const divStyle = { backgroundColor: color };
  return (
    <>
      <Typography sx={{ fontWeight: 1000 }} variant="h3">
        Color picker
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
            <Box
              component="div"
              sx={{ borderRadius: "10px", padding: "20px" }}
              style={divStyle}
            >
              <Typography
                align="center"
                variant="h3"
                sx={{ fontWeight: 1000, color: "white" }}
              >
                Hello
              </Typography>
            </Box>
            <br></br>

            <Box sx={{ textAlign: "center" }}>
              {colorNames.map((colorName) => (
                <Button
                  sx={{
                    margin: "5px",
                    borderRadius: "25px",
                    height: "50px",
                    width: "200px",
                  }}
                  variant="outlined"
                  onClick={() => setColor(colorName)}
                  key={colorName}
                >
                  {colorName}
                </Button>
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default SecondExampleColorPicker;
