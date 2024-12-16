import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import DataUploadForm from "../components/DataUploadForm";
import DataVisualization from "../components/DataVisualization";

const HomePage = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h3" align="center" gutterBottom>
          Аналітика та Завантаження Даних
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h5" align="center" gutterBottom>
                Download
              </Typography>
              <DataUploadForm />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h5" align="center" gutterBottom>
                Visualization
              </Typography>
              <DataVisualization />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
