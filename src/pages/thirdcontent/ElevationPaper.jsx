import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

function ElevationPaper() {
  return (
    <>
      <Typography sx={{ fontWeight: 1000 }} variant="h3">
        Elevation paper
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
        <Grid container spacing={2}>
          {[lightTheme, darkTheme].map((theme, index) => (
            <Grid item xs={6} key={index}>
              <ThemeProvider theme={theme}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "background.default",
                    display: "grid",
                    gridTemplateColumns: { md: "1fr 1fr" },
                    gap: 2,
                  }}
                >
                  {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                    <Item key={elevation} elevation={elevation}>
                      {`elevation=${elevation}`}
                    </Item>
                  ))}
                </Box>
              </ThemeProvider>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default ElevationPaper;
